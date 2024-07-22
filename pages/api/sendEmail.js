import nodemailer from 'nodemailer';
import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message, captchaToken } = req.body;

        // Verify reCAPTCHA
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

        try {
            const response = await axios.post(verificationUrl);
            const { success } = response.data;

            if (!success) {
                return res.status(400).json({ message: 'Captcha verification failed' });
            }
        } catch (error) {
            return res.status(500).json({ message: 'Captcha verification error', error: error.message });
        }

        // Configure the email transporter using Nodemailer
        let transporter = nodemailer.createTransport({
            service: 'Outlook',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
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
