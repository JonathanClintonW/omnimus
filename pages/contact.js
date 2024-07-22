import React from 'react';

const Contact = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:omnimus.agency@outlook.com';
    };

    return (
        <main>
            <button onClick={handleEmailClick}>
                Email Us
            </button>
        </main>
    );
};

export default Contact;
