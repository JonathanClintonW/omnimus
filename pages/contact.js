import React from 'react';
import { FaEnvelope, FaInstagram, FaRegEnvelope } from 'react-icons/fa';

const Contact = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:omnimus.agency@outlook.com';
    };

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/omnimus.id', '_blank');
    };

    return (
        <main className='flex items-center justify-center h-[calc(100vh-94px)]'>
            <div className='bg-white p-2 rounded-md shadow-[0_10px_20px_rgba(0,0,0,0.25)]'>
                <h1 className='bg-turqoise-gradient rounded-md py-4 px-8 font-bold text-3xl text-center text-white shadow-outside-glow'>CONTACT US</h1>
                <p className='text-black font-semibold text-lg p-4 break-all border-b-2 mb-2'>Get in touch with us for more information</p>

                <div className='text-black flex flex-col gap-2'>
                    <button
                        onClick={handleInstagramClick}
                        className='button-animation w-full flex items-center px-4 py-2 rounded-md font-medium justify-center text-lg'
                    >
                        <span className='button-content hover:text-white transition-all duration-200 gap-2'>
                            <FaInstagram size={24} />
                            <span>Follow Us on Instagram</span>
                        </span>
                    </button>
                    <button
                        onClick={handleEmailClick}
                        className='button-animation w-full flex items-center px-4 py-2 rounded-md font-medium justify-center text-lg'
                    >
                        <span className='button-content hover:text-white transition-all duration-200 gap-2'>
                            <FaRegEnvelope size={24} />
                            <span>Email Us</span>
                        </span>
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Contact;
