import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="container">
            <form className="contact-form">
                <input type="hidden" name="contact_number" />
                <label>Nom</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" cols="30" rows="10" />
                <div className="center">
                    <input type="submit" value="Send" />
                </div>
            </form>
        </div>
    )
}

export default Contact;