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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4086585016257!2d73.87515977496383!3d18.555606082544752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0dd4e54e6f1%3A0x2d34bd0e5792430a!2sHari%20Ganga%20Society%2C%20Yerawada%2C%20Pune%2C%20Maharashtra%20411006!5e0!3m2!1sen!2sin!4v1742185787512!5m2!1sen!2sin" 
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
