import nodemailer from 'nodemailer'
import sanitizeHtml from 'sanitize-html'
import { readBody, createError } from 'h3'
import fetch from 'node-fetch'

export default defineEventHandler(async (event) => {
  const { name, email, message, recaptchaToken } = await readBody(event)

  if (!name || !email || !message || !recaptchaToken) {
    throw createError({
      statusCode: 400,
      message: 'Données manquantes : Veuillez remplir tous les champs.'
    })
  }

  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY
  const recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify'

  const recaptchaRes = await fetch(recaptchaUrl, {
    method: 'POST',
    body: new URLSearchParams({
      secret: recaptchaSecret,
      response: recaptchaToken
    })
  })

  const recaptchaData = await recaptchaRes.json()

  if (!recaptchaData.success) {
    throw createError({
      statusCode: 400,
      message: `Échec de la vérification reCAPTCHA: ${recaptchaData['error-codes']?.join(', ')}`
    })
  }

  const cleanName = sanitizeHtml(name)
  const cleanEmail = sanitizeHtml(email)
  const cleanMessage = sanitizeHtml(message)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  try {
    // 1. Envoi à toi (propriétaire du site)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'Nouveau message de contact',
      html: `
        <p><strong>Nom:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${cleanMessage}</p>
      `
    })

    // 2. Confirmation à l'utilisateur
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: cleanEmail,
      ...(process.env.BCC_EMAIL ? { bcc: process.env.BCC_EMAIL } : {}),
      subject: 'Confirmation de votre message à Shoshin Web Services',
      text: `Bonjour ${cleanName},

Merci pour votre message ! Nous l'avons bien reçu et reviendrons vers vous sous peu.

Voici un rappel de votre message :
------------------------------
${cleanMessage}
------------------------------

Cordialement,
Pierre Tinard
Shoshin Web Services
`,
      html: `
        <p>Bonjour ${cleanName},</p>
        <p>Merci pour votre message ! <br> Nous l'avons bien reçu et reviendrons vers vous sous peu.</p>
        <p><strong>Votre message :</strong></p>
        <blockquote style="border-left: 4px solid #ccc; margin: 1em 0; padding-left: 1em; color: #555;">
          ${cleanMessage}
        </blockquote>
        <p>Cordialement,<br>Pierre Tinard<br><strong>Shoshin Web Services</strong></p>
      `
    })

    return { success: true, message: 'Formulaire envoyé avec succès.' }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Une erreur est survenue lors de l\'envoi de l\'email.'
    })
  }
})

