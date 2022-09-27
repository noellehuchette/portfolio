import React from 'react';
import './style.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="block-content">
        <div className="block-title">
          <h3> $ contact </h3>
        </div>
        <div className="contact-item">
          <a href="tel:8047620267" className="contact-label">
            Phone: <span className="info">(804)762-0267</span>
          </a>
        </div>
        <div className="contact-item">
          <a className="contact-label" href="mailto:noelle.huchette@gmail.com">
            Email: <span className="info">noelle.huchette@gmail.com</span>
          </a>
        </div>
        <div className="contact-item">
          <a
            className="contact-label"
            href="https://www.linkedin.com/in/noelle-huchette/"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
