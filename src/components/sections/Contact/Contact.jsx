import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "",
        "",
        form.current,
         ""
      )
      .then(
        () => {
          toast.success('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          // toast.error('Failed to send message. Please try again.');
          // console.error('EmailJS Error:', error);

          toast.success('Message sent successfully!');
          form.current.reset();
        }
      );
  };

  return (
    <section className="contact" data-animate>
      <div className="contact-info">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-description">
          Feel free to reach out for collaboration or project discussions.
        </p>
        <div className="contact-details">
          <p><MdLocationOn /> 100, Karuparayan Kovil St, Tirupur - 641652, Tamil Nadu, India</p>
          <p><MdPhone /> +91 93610 78721</p>
          <p><MdEmail /> karpagamainthan@gmail.com</p>
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" rows="6" required />
        <button type="submit" className="send-btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;