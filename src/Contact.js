import React , {useEffect} from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('service_t0q14mq', 'template_e31z9ud', e.target, 'user_4spjTWDT28LBJIviz1mry')
      .then((result) => {
        //   console.log(result.text);
        let formMess = document.querySelector(".form-message");
        formMess.style.opacity = "1";
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

    return (
        <div className="container">
            <form onSubmit={sendEmail} className="contact-form">
                <label>Nom</label>
                <input type="text" name="from_name" />
                <label>Email</label>
                <input type="email" name="reply_to" />
                <label>Message</label>
                <textarea name="message" cols="30" rows="10" />
                <div className="center">
                    <input type="submit" value="Envoyer" />
                </div>
                <div className="form-message">Votre message a été envoyé.</div>
            </form>
        </div>
    )
}

export default Contact;