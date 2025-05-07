import nodemailer from 'nodemailer'  // Import Nodemailer pour l'envoi d'email
import sanitizeHtml from 'sanitize-html'  // Import pour nettoyer les entrées HTML
import { readBody, createError, getRequestHeader } from 'h3'  // Import des outils de gestion des erreurs et des corps de requête
import fetch from 'node-fetch'  // Import pour effectuer des requêtes HTTP (notamment pour reCAPTCHA)

export default defineEventHandler(async (event) => {
  // Récupération du corps de la requête (données du formulaire)
  const { name, email, message, recaptchaToken } = await readBody(event)

  // Vérification que toutes les données nécessaires sont présentes
  if (!name || !email || !message || !recaptchaToken) {
    throw createError({
      statusCode: 400,
      message: 'Données manquantes : Veuillez remplir tous les champs.'
    })
  }

  // Récupération de la clé secrète reCAPTCHA
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY // La clé secrète de reCAPTCHA
  const recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify'

  // Envoi de la requête pour vérifier le token reCAPTCHA avec l'API Google
  const recaptchaRes = await fetch(recaptchaUrl, {
    method: 'POST',
    body: new URLSearchParams({
      secret: recaptchaSecret,
      response: recaptchaToken
    })
  })

  // Récupération de la réponse de reCAPTCHA
  const recaptchaData = await recaptchaRes.json()

  // Débogage : Afficher les données reçues de l'API reCAPTCHA
  console.log('Réponse de reCAPTCHA:', recaptchaData)

  // Si le reCAPTCHA échoue, renvoyer une erreur avec un message détaillé
  if (!recaptchaData.success) {
    throw createError({
      statusCode: 400,
      message: `Échec de la vérification reCAPTCHA: ${recaptchaData['error-codes']?.join(', ')}`
    })
  }

  // Nettoyage des entrées utilisateur pour éviter des injections HTML ou JavaScript
  const cleanMessage = sanitizeHtml(message)

  // Configurer Nodemailer pour l'envoi de l'email
  const transporter = nodemailer.createTransport({
    service: 'gmail',  // Exemple avec Gmail, mais tu peux choisir le service de ton choix
    auth: {
      user: process.env.EMAIL_USER,  // Ton adresse email
      pass: process.env.EMAIL_PASS   // Ton mot de passe ou app password
    }
  })

  const mailOptions = {
    from: process.env.EMAIL_USER, // Ton adresse email
    to: process.env.RECIPIENT_EMAIL, // L'email du destinataire
    subject: 'Nouveau message de contact',
    html: `
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${cleanMessage}</p>
    `
  }

  // Envoi de l'email
  try {
    await transporter.sendMail(mailOptions)
    return { success: true, message: 'Formulaire envoyé avec succès.' }
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    throw createError({
      statusCode: 500,
      message: 'Une erreur est survenue lors de l\'envoi de l\'email.'
    })
  }
})
