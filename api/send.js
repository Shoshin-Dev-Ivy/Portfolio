const nodemailer = require("nodemailer");

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Champs manquants." });
  }

  // Créer un transporteur SMTP avec Gmail
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.MAIL_USER}>`, // Expéditeur = toi (SMTP)
      to: process.env.MAIL_TO,                     // Destinataire = toi
      replyTo: email,                              // Pour répondre à l'utilisateur
      subject: "Nouveau message depuis le site",
      text: `
Nom: ${name}
Email: ${email}
Message:
${message}
      `,
    });

    return res.status(200).json({ message: "Message envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur d'envoi :", error);
    return res.status(500).json({ message: "Erreur lors de l'envoi du message." });
  }
};
