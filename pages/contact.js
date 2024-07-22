import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [captchaToken, setCaptchaToken] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!captchaToken) {
            alert('Please complete the captcha');
            return;
        }

        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...formData, captchaToken })
        });

        if (response.ok) {
            alert('Email sent successfully!');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } else {
            alert('Failed to send email. Please try again.');
        }
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <ReCAPTCHA
                    sitekey="6LcB6RUqAAAAAPHS8yTEf0EyBg34LZGzHLeaX5rH"
                    onChange={handleCaptchaChange}
                />
                <button type="submit">Send</button>
            </form>
        </main>
    );
};

export default Contact;
