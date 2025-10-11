// src/pages/ContactPage.jsx
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show a thank-you message
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div
      style={{
        maxWidth: 700,
        margin: '0 auto',
        padding: '80px 20px 40px',
        color: '#ffb380',
        fontFamily: 'inherit',
      }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: 20, color: '#ff5106' }}>
        Contact Me
      </h1>

      <p style={{ fontSize: '1.05rem', marginBottom: 40 }}>
        Have a question or want to work together? Fill out the form below or reach me via email/phone.
      </p>

      {submitted && (
        <div
          style={{
            marginBottom: 20,
            padding: 12,
            border: '1px solid #ff5106',
            borderRadius: 6,
            backgroundColor: '#18171c',
            color: '#ff5106',
            fontWeight: 600,
          }}
        >
          Thank you! Your message has been sent.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: 12,
            borderRadius: 6,
            border: '1px solid #ff5106',
            backgroundColor: '#18171c',
            color: '#ffb380',
            fontSize: '1rem',
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: 12,
            borderRadius: 6,
            border: '1px solid #ff5106',
            backgroundColor: '#18171c',
            color: '#ffb380',
            fontSize: '1rem',
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          style={{
            padding: 12,
            borderRadius: 6,
            border: '1px solid #ff5106',
            backgroundColor: '#18171c',
            color: '#ffb380',
            fontSize: '1rem',
            resize: 'vertical',
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#ff5106',
            color: '#18171c',
            padding: '12px 20px',
            borderRadius: 6,
            fontWeight: 600,
            fontSize: '1rem',
            border: 'none',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#ff6a00')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#ff5106')}
        >
          Send Message
        </button>
      </form>

      <div style={{ marginTop: 40, fontSize: '0.95rem', lineHeight: 1.6 }}>
        <p>Email: <a href="mailto:nandhini@email.com" style={{ color: '#ff5106' }}>nandhini@email.com</a></p>
        <p>Phone: <a href="tel:8018654081" style={{ color: '#ff5106' }}>801-865-4081</a></p>
      </div>
    </div>
  );
};

export default ContactPage;
