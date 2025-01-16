import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactMeForm.css"

const ContactMeForm = () => {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(import.meta.env.VITE_SERVICE_ID);
        emailjs
        .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, { 
                publicKey: import.meta.env.VITE_PUBLIC_KEY 
            })
        .then(
            () => {
            console.log('SUCCESS!');
            setIsSubmitted(true);
            setIsError(false);
            },
            (error) => {
            console.log('FAILED...', error.text);
            setIsSubmitted(false);
            setIsError(true);
            },
        );
    };
    return (
        <div className="cm-form-container">
            <form ref={form} onSubmit={sendEmail} className='cm-form'>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="from_name" placeholder="Your Name" required className='regular-input'></input>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="user_email" placeholder="youremail@gmail.com" required className='regular-input'></input>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Your Email's Purpose" required className='regular-input'></input>
                <label htmlFor="message">Message</label>
                <textarea placeholder="Your Message Here" rows="7" id="message" name="message" required className='message-input'></textarea>
                <div className='button-area'>
                    <input type="submit" value="Send" className="submit-btn"></input>
                    {isSubmitted && (
                        <p className='confirmation'>Submission successful! Please check your email for further confirmation!</p> 
                    )}
                    {isError && (
                        <p className='confirmation'>There was an error with your submission. If error persists, please email 2020mtran@gmail.com externally.</p> 
                    )}
                </div>
            </form>
        </div>
    )
}

export default ContactMeForm;