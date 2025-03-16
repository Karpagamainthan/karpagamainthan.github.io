import React, { useState } from 'react';
import '../assets/styles/Contact.css';
// import { FaEnvelope } from 'react-icons/fa';

function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    from: '',
    subject: '',
    content: '',
  });

//   const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const emailData = {
      to: 'karpagamainthan@gmail.com',
      from: formData.from,
      subject: formData.subject,
      content: formData.content,
    };

    try {
      // Replace with actual email-sending API call
      console.log('Email sent:', emailData);
      alert('Your email has been sent successfully!');
      closeModal();
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>I'd love to hear from you! Feel free to reach out.</p>
        <div className="contact-details">
          <div>
            <strong>Phone:</strong> +1-234-567-8901
          </div>
          <div>
            <strong>Email:</strong> karpagamainthan@example.com
          </div>
          {/* <FaEnvelope
            className="email-icon"
            onClick={openModal}
            title="Send Email"
          /> */}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Send Email</h3>
            <form onSubmit={sendEmail} className="email-form">
              <div className="form-group">
                <label htmlFor="from">From</label>
                <input
                  type="email"
                  id="from"
                  name="from"
                  placeholder="Your email address"
                  value={formData.from}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea
                  id="content"
                  name="content"
                  rows="5"
                  placeholder="Enter your message"
                  value={formData.content}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="modal-actions">
                <button type="submit" className="send-btn">
                  Send Email
                </button>
                <button type="button" className="close-btn" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
