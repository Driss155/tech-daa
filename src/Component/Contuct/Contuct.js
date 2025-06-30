import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contuct.css';

function Contuct() {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !message) {
            setSubmissionStatus({ type: 'error', message: 'Please fill in all fields.' });
            return;
        }

        emailjs.sendForm(
            'service_688o4ch',      // Your Service ID
            'template_ljtz1hk',     // Your Template ID
            form.current,
            'Qci5-y3bM6ZcuWgMM'       // Your Public Key
        )
        .then((result) => {
            console.log('SUCCESS!', result.text);
            setSubmissionStatus({ type: 'success', message: 'Message sent successfully!' });
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
                    <div>
                        <div className='contuct-info-img'> <img src='/images/contuct/location-black.svg' alt='location icon'/> </div>
                        <div className='contuct-info-text-1'>
                        </div>
                    </div>
                    <div className='contuct-info-center'>
                        <div className='contuct-info-img'> <img src='/images/contuct/appel-black.svg' alt='phone icon'/> </div>
                        <div className='contuct-info-text'>
                        </div>
                    </div>
                    <div>
                        <div className='contuct-info-img'> <img src='/images/contuct/email-black.svg' alt='email icon'/> </div>
                        <div className='contuct-info-text-2'>
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
                            <input type='text' name="from_name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                            <input type='email' name="from_email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type='text' name="subject" placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                            <textarea name="message" col={8} rows={8} placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            <button type="submit">Send Message</button>
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