import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-page">
      {/* Page Title */}
      {/* <h1 className="contact-title">Get in Touch</h1> */}

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form-container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="number"
              placeholder="Your Phone Number"
              value={formData.number}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Google Maps Section */}
        <div className="map-container">
          <h2>Find Us</h2>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30271.848402270847!2d73.77376487071757!3d18.48451753394976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfcd3f188b95%3A0x39ee701b0b5d2531!2sWarje%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1743139922600!5m2!1sen!2sin" 
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
