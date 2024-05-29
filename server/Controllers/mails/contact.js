const path = require('path');
const nodemailer = require("nodemailer");
const { attachment, contentType } = require('express/lib/response');

// Configuration du transporteur SMTP
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "mycodeairlines@gmail.com",
        pass: "ovqb pvrj uury wxie",
    },
    ignoreTLS: true, // Ignorer TLS (Transport Layer Security)
    tls: {
        // Options TLS
        rejectUnauthorized: false // Désactiver la vérification du certificat SSL
    }
});

// Fonction pour envoyer un e-mail
module.exports.sendmail = async (req, res) => {
    // Contenu de l'e-mail
    const { nom, email, numero , message } = req.body;
    try {
        const mailOptions = {
            from: "mycodeairlines@gmail.com",
            to: [email,"fabricejordan2001@gmail.com"],
            subject: "Nouveau message du formulaire de contact",
            html: `<p><strong>Nom:</strong> ${nom}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Numéro:</strong> ${numero}</p>
            <p><strong>Message:</strong> ${message}</p>`,

            attachments: [ // les pieces jointes
                {
                    filename: 'mycode.jpg',
                    path: path.join(__dirname, 'BookingFLyer.png'),
                    contentType: 'image/jpg',
                }]
        }
        // Envoie l'e-mail
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'E-mail envoyé avec succès !' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de l\'envoi de l\'e-mail.' });
    }

}

// Nouvelle fonction Bookmails
module.exports.Bookmails = async (req, res) => {
    const { email, reservations } = req.body;

    // Formater les détails des tickets
    const ticketsDetails = reservations.map((ticket, index) => `
        <h3>Ticket ${ticket.numTicket}</h3>
        <p><strong>Nom:</strong> ${ticket.nom}</p>
        <p><strong>Numéro de passeport:</strong> ${ticket.numPassport}</p>
        <p><strong>Âge:</strong> ${ticket.age}</p>
        <p><strong>Type de voyage:</strong> ${ticket.type}</p>
        <p><strong>Classe:</strong> ${ticket.classe}</p>
        <p><strong>Prix:</strong> ${ticket.prix}</p>
        <p><strong>Destination:</strong> ${ticket.destination}</p>
        <p><strong>Promotion:</strong> ${ticket.promotion}</p>
    `).join('');

    try {
        const mailOptions = {
            from: "mycodeairlines@gmail.com",
            to: email,
            subject: "Confirmation de réservation",
            html: `
                <h2>Votre réservation a été confirmée</h2>
                ${ticketsDetails}
            `,
            attachments: [ // Ajoutez des pièces jointes si nécessaire
                {
                    filename: 'booking-details.jpg',
                    path: path.join(__dirname, 'BookingFLyer.png'),
                    contentType: 'image/jpg',
                }
            ]
        };
        // Envoie l'e-mail
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'E-mail de confirmation envoyé avec succès !' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de l\'envoi de l\'e-mail.' });
    }
};