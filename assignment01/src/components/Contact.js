/*
 * File name: Contact.js
 * Student’s Name: Guilherme Passos Da Silva
 * StudentID: 301379110
 * Date: 2024-09-27
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });
  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/'); // Redirect to Home Page
  };

  return (
    <div className="container">
      <h1>Contact Me</h1>
      <p>If you'd like to get in touch, feel free to send me a message through the form below or reach out via my social media links.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        {['firstName', 'lastName', 'contactNumber', 'email', 'message'].map((field) => (
          <div className="form-group" key={field}>
            <label htmlFor={field}>
              {field === 'contactNumber' ? 'Contact Number:' : field.charAt(0).toUpperCase() + field.slice(1) + ':'}
            </label>
            {field !== 'message' ? (
              <input
                type={field === 'contactNumber' ? 'tel' : 'text'}
                id={field}
                name={field}
                className="form-control"
                required
                value={formData[field]}
                onChange={handleChange}
              />
            ) : (
              <textarea
                id={field}
                name={field}
                className="form-control"
                rows="5"
                required
                value={formData[field]}
                onChange={handleChange}
              ></textarea>
            )}
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> guilherme2005.passos@gmail.com</p>
        <p><strong>Phone:</strong> +1 (437) 239-7515</p>
      </section>

      {/* Social Media Links */}
      <section className="social-section">
    <h2>Follow me on social media</h2>
    <ul className="social-links">
        <li><a href="https://www.linkedin.com/in/guilherme-passos-025b71319/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/Guilhpassos" target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href="https://www.instagram.com/guilh_passos?igsh=MWM2a3Q2bmFxczNzbA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">Instagram</a></li>
    </ul>
</section>

    </div>
  );
};

export default Contact;
