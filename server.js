require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Configurar el transporter de NodeMailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Ruta para enviar el formulario
app.post('/send-email', async (req, res) => {
  const { name, email, phone, subject, description } = req.body;

  try {
    await transporter.sendMail({
      from: `"Formulario de Contacto" <${process.env.EMAIL_USER}>`, // Nombre personalizado
      to: 'elmanianaesmasbonito@gmail.com', // Email de la empresa
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <img src="cid:logo" style="background-color: #007BFF; width: 100px; display: block; margin: auto;">
          <h2 style="background-color: #007BFF; color: white; padding: 10px; text-align: center; border-radius: 5px;">Nuevo Mensaje de Contacto</h2>
          <p style="padding: 10px 0px;" ><strong>Nombre:</strong> ${name}</p>
          <p style="padding: 10px 0px;" ><strong>Email:</strong> <a href="mailto:${email}" style="color: #007BFF;">${email}</a></p>
          <p style="padding: 10px 0px;" ><strong>Teléfono:</strong> ${phone}</p>
          <p style="padding-top: 10px;" ><strong>Mensaje:</strong></p>
          <div style="background-color: #f8f9fa; padding: 10px; border-left: 4px solid #007BFF;">
            <p>${description}</p>
          </div>
          <hr>
          <a href="mailto:${email}" style="display: block; text-align: center; padding: 10px; background-color: #007BFF; color: white; text-decoration: none; border-radius: 5px; width: 200px; margin: auto;">
            Responder
          </a>
          <p style="text-align: center; font-size: 12px; color: #888;">Este mensaje fue enviado desde el formulario de contacto de la web.</p>
        </div>
      `,
      attachments: [{
        filename: 'logo.png',
        path: './public/logo.png', // Asegúrate de que el archivo existe
        cid: 'logo' // ID para referenciar en la etiqueta <img>
      }]
    });

    res.status(200).send({ message: 'Correo enviado con éxito' });
  } catch (error) {
    res.status(500).send({ message: 'Error al enviar el correo', error });
  }
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
