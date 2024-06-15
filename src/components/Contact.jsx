import React from 'react';
import './Contact.css'; // Import your custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Only import icons that exist
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Import solid icons for email and phone

const Contact = () => {
  const contactLinks = [
    {
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/shreeraksha-p-bhat-12004424a/', // Replace with your LinkedIn profile URL
      title: 'LinkedIn',
    },
    {
      icon: faInstagram,
      url: 'https://instagram.com/shreerakshapbhat/', // Replace with your Instagram handle (URL)
      title: 'Instagram',
    },
    {
      icon: faEnvelope,
      url: 'mailto:shreerakshapbhat@gmail.com', // Replace with your email address
      title: 'Email',
    },
    {
      icon: faPhone,
      url: '....', // Replace with your phone number (optional)
      title: 'Phone',
    },
  ];

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out if you have any questions or projects in mind.</p>
      <ul className="contact-links">
        {contactLinks.map((link) => (
          <li key={link.title}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={link.icon} /> {link.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
