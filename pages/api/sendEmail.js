import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Configure the email transporter using Nodemailer
        let transporter = nodemailer.createTransport({
            service: 'Outlook',
            auth: {
                user: 'your-outlook-email@example.com',
                pass: 'your-email-password'
            }
        });

        // Define the email options
        let mailOptions = {
            from: email,
            to: 'omnimus.agency@outlook.com',
            subject: `New message from ${name}`,
            text: message
        };

        try {
            // Send the email
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Failed to send email', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
