// src/pages/Contact.js
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Map from '../components/Map';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Message sent!');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" required />
      <label>Email</label>
      <input type="email" name="email" required />
      <label>Message</label>
      <textarea name="message" required />
      <button type="submit">Send</button>
      <p>Find us at our location below:</p>
      <Map /> {/* Mapa será exibido aqui */}
    </form>
  );
}

export default Contact;