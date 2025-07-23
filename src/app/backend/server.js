const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const sanitizeHtml = require('sanitize-html');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const emailRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 3,
  message: {
    error: 'Trop de tentatives d\'envoi. Veuillez réessayer dans 15 minutes.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 1025,
  ignoreTLS: true
});

app.get('/', (req, res) => {
  res.send('API Email fonctionne');
});

function cleanInput(input, allowBr = false) {
  return sanitizeHtml(input, {
    allowedTags: allowBr ? ['br'] : [],
    allowedAttributes: {}
  });
}

app.post('/send-email', emailRateLimit, async (req, res) => {
  const { name, subject, message, company } = req.body;

  if (company && company.trim() !== '') {
    return res.status(400).json({ error: 'Bot détecté' });
  }

  if (!name || !subject || !message) {
    return res.status(400).json({ error: 'Champs requis manquants' });
  }

  const cleanName = cleanInput(name);
  const cleanSubject = cleanInput(subject);
  const cleanMessage = cleanInput(message, true);

  try {
    await transporter.sendMail({
      from: `"${cleanName}" <no-reply@trouvetonartisan.fr>`,
      to: 'artisan@example.com',
      subject: cleanSubject,
      text: cleanMessage
    });

    return res.status(200).json({ message: 'Email envoyé avec succès' });
  } catch (err) {
    return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
  }
});

app.listen(PORT);