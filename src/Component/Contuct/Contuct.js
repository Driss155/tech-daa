// src/Component/Contuct/Contuct.js

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contuct.css';

function Contuct() {
    // useRef to target the form element
    const form = useRef();

    // useState to manage the form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    
    // useState to manage the submission status message (e.g., "Sent!", "Error...")
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleSubmit = (e) => {
        // 1. Prevents the default browser page reload
        e.preventDefault();

        // 2. A simple check to make sure fields are not empty
        if (!name || !email || !subject || !message) {
            setSubmissionStatus({ type: 'error', message: 'Please fill in all fields.' });
            return;
        }

        // 3. This is where we use your keys to send the email!
        emailjs.sendForm(
            'service_688o4ch',      // Your Service ID
            'template_ljtz1hk',     // Your Template ID
            form.current,
            'Qci5-y3bM6ZcuWgMM'       // Your Public Key
        )
        .then((result) => {
            console.log('SUCCESS!', result.text);
            setSubmissionStatus({ type: 'success', message: 'Message sent successfully!' });
            // Clear the form fields after successful submission
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }, (error) => {
            console.log('FAILED...', error.text);
            setSubmissionStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        });
    };

    return (
        <div className='contuct-container'>
            <div className='contuct-info'>
                <div className='contuct-info-header'>
                    <p>Contact</p>
                </div>
                <div className='contuct-info-content'>
                    {/* ... your location, phone, and email info ... */}
                    <div>
                        <div className='contuct-info-img'> <img src='/images/contuct/location-black.svg' alt='location icon'/> </div>
                        <div className='contuct-info-text-1'>
                            <p>localitasion :</p>
                            <p>Oujda</p>
                        </div>
                    </div>
                    <div className='contuct-info-center'>
                        <div className='contuct-info-img'> <img src='/images/contuct/appel-black.svg' alt='phone icon'/> </div>
                        <div className='contuct-info-text'>
                            <p>Whatssap :</p>
                            <p>+212 772 570 811</p>
                        </div>
                    </div>
                    <div>
                        <div className='contuct-info-img'> <img src='/images/contuct/email-black.svg' alt='email icon'/> </div>
                        <div className='contuct-info-text-2'>
                            <p>Email :</p>
                            <p>tech.d.agency@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='main-2'></div>

                <div className='contuct-frm'>
                    <div className='contuct-frm-header'>
                        <p>Get in touch with us</p>
                    </div>
                    <div className='contuct-frm-content'>
                        <form ref={form} onSubmit={handleSubmit}>
                            {/* The 'name' attribute MUST match the variables in your EmailJS template */}
                            <input type='text' name="from_name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                            <input type='email' name="from_email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type='text' name="subject" placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                            <textarea name="message" col={8} rows={8} placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            <button type="submit">Send Message</button>

                            {/* This div will display the success or error message */}
                            {submissionStatus && (
                                <p className={`submission-message ${submissionStatus.type}`}>
                                    {submissionStatus.message}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contuct;