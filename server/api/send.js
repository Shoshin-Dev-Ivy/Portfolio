// server/api/send.js
import nodemailer from 'nodemailer'
import sanitizeHtml from 'sanitize-html'
import { readBody, createError, getRequestHeader } from 'h3'
import fetch from 'node-fetch'

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY
const ipRateLimitMap = new Map()

// Rate limit basé sur IP
function isRateLimited(ip, maxRequests = 5, windowMs = 60 * 1000) {
  const now = Date.now()
  const entry = ipRateLimitMap.get(ip) || { count: 0, timestamp: now }

  if (now - entry.timestamp > windowMs) {
    ipRateLimitMap.set(ip, { count: 1, timestamp: now })
    return false
  }

  entry.count += 1
  ipRateLimitMap.set(ip, entry)
  return entry.count > maxRequests
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

export default defineEventHandler(async (event) => {
  const ip = getRequestHeader(event, 'x-forwarded-for') || 'inconnue'

  if (isRateLimited(ip)) {
    console.warn(`Rate-limit dépassé pour ${ip}`)
    throw createError({ statusCode: 429, message: 'Trop de requêtes. Réessaie plus tard.' })
  }

  const body = await readBody(event)
  const { email, message, recaptchaToken } = body || {}

  if (!email || !message || !recaptchaToken) {
    throw createError({ statusCode: 400, message: 'Champs manquants.' })
  }

  
  // ✅ Requête POST bien formée vers l’API Google
  try {
    const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    })

    const recaptchaData = await recaptchaRes.json()
    console.log('Réponse Google reCAPTCHA:', recaptchaData)
    console.log('Score reCAPTCHA reçu :', recaptchaData.score)

    if (!recaptchaData.success) {
      throw createError({
        statusCode: 400,
        message: `Échec de la vérification reCAPTCHA (${recaptchaData['error-codes']?.join(', ')})`,
      })
    }
    
    // 🧠 Vérifie le score : seuil minimum recommandé = 0.5
    if (recaptchaData.score !== undefined && recaptchaData.score < 0.5) {
      console.warn(`Score reCAPTCHA trop bas : ${recaptchaData.score}`)
      throw createError({
        statusCode: 403,
        message: 'Comportement suspect détecté par reCAPTCHA.',
      })
    }
  } catch (err) {
    console.error('Erreur reCAPTCHA', err)
    throw createError({ statusCode: 500, message: 'Erreur de vérification reCAPTCHA.' })
  }

  // Sanitize input
  const cleanEmail = sanitizeHtml(email, { allowedTags: [], allowedAttributes: {} }).trim()
  const cleanMessage = sanitizeHtml(message, { allowedTags: [], allowedAttributes: {} }).trim()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(cleanEmail)) {
    throw createError({ statusCode: 400, message: 'Email invalide.' })
  }

  // Envoi de l’email
  try {
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO,
      subject: 'Nouveau message depuis le site',
      text: `Message de : ${cleanEmail}\n\n${cleanMessage}`,
      html: `<p><strong>Message de :</strong> ${cleanEmail}</p><p>${cleanMessage}</p>`,
    })

    return { success: true, message: 'Votre message a bien été envoyé.' }
  } catch (err) {
    console.error("Erreur d'envoi de l'email", err)
    throw createError({ statusCode: 500, message: "Erreur lors de l'envoi du message." })
  }
})

