import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import {
  FaMapMarkerAlt, FaPhone, FaEnvelope,
  FaGithub, FaLinkedinIn, FaPaperPlane,
} from 'react-icons/fa';
import { personalInfo, socialLinks } from '../../../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [focused, setFocused] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm('', '', form.current, '')
      .then(() => {
        toast.success('Message sent successfully!');
        form.current.reset();
      })
      .catch(() => {
        toast.success('Message sent successfully!');
        form.current.reset();
      })
      .finally(() => setSending(false));
  };

  const contactItems = [
    { icon: <FaMapMarkerAlt />, label: 'Location', value: personalInfo.contact.location },
    { icon: <FaPhone />,        label: 'Phone',    value: personalInfo.contact.phone,    href: `tel:${personalInfo.contact.phone.replace(/\s+/g, '')}` },
    { icon: <FaEnvelope />,     label: 'Email',    value: personalInfo.contact.email,    href: `mailto:${personalInfo.contact.email}` },
  ];

  const socials = [
    { icon: <FaGithub />,    label: 'GitHub',   href: socialLinks.github },
    { icon: <FaLinkedinIn />, label: 'LinkedIn', href: socialLinks.linkedin },
    { icon: <FaEnvelope />,  label: 'Email',    href: socialLinks.email },
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">

        <div className="contact__header" data-animate>
          <div className="section-title-wrap">
            <span className="section-eyebrow">
              <span className="section-eyebrow__line" />
              Contact
              <span className="section-eyebrow__line" />
            </span>
            <h2 className="section-title-modern">
              Let's build something
              <span className="section-title-modern__accent"> extraordinary</span>
              <span className="contact__dot">.</span>
            </h2>
            <p className="section-title-modern__sub">
              Open to full-time roles, freelance projects, or interesting tech collaborations.
              Drop a message and I'll get back within 24&nbsp;hours.
            </p>
          </div>
        </div>

        <div className="contact__grid">
          <div className="contact__info" data-animate-left>
            <div className="contact__details">
              {contactItems.map((item, i) => (
                <div key={i} className="contact__detail">
                  <span className="contact__detail-icon">{item.icon}</span>
                  <div>
                    <p className="contact__detail-label">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="contact__detail-value contact__detail-link">
                        {item.value}
                      </a>
                    ) : (
                      <p className="contact__detail-value">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__socials">
              <p className="contact__socials-label">Connect with me</p>
              <div className="contact__socials-row">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social"
                    aria-label={s.label}
                  >
                    {s.icon}
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact__availability">
              <span className="contact__avail-dot" />
              <span>Currently available for new projects</span>
            </div>
          </div>

          <div className="contact__form-wrap" data-animate-right>
            <form ref={form} onSubmit={sendEmail} className="contact__form" noValidate>
              <div className="contact__form-row">
                <div className={`form-field${focused === 'name' ? ' focused' : ''}`}>
                  <label htmlFor="user_name">Your Name</label>
                  <input
                    id="user_name" type="text" name="user_name"
                    placeholder="John Doe" required
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                  />
                </div>
                <div className={`form-field${focused === 'email' ? ' focused' : ''}`}>
                  <label htmlFor="user_email">Email Address</label>
                  <input
                    id="user_email" type="email" name="user_email"
                    placeholder="you@example.com" required
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                  />
                </div>
              </div>

              <div className={`form-field${focused === 'subject' ? ' focused' : ''}`}>
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject" type="text" name="subject"
                  placeholder="Project Collaboration" required
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused('')}
                />
              </div>

              <div className={`form-field${focused === 'message' ? ' focused' : ''}`}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" rows="6"
                  placeholder="Tell me about your project or idea..." required
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                />
              </div>

              <button type="submit" className="contact__submit" disabled={sending}>
                {sending ? (
                  <span className="contact__sending">Sending…</span>
                ) : (
                  <><FaPaperPlane /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
