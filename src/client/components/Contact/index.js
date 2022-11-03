import React from 'react';
import './style.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="block-content">
        <div className="block-title">
          <h3>contact </h3>
        </div>
        <div className="contact-item">
          <a href="tel:8047620267" className="contact-label">
            <h4>Phone: </h4>
            <span className="info">(804)762-0267</span>
          </a>
        </div>
        <div className="contact-item">
          <a className="contact-label" href="mailto:noelle.huchette@gmail.com">
            <h4>Email: </h4>
            <span className="info">noelle.huchette@gmail.com</span>
          </a>
        </div>
        <div className="contact-item">
          <a
            className="contact-label"
            href="https://www.linkedin.com/in/noelle-huchette/"
          >
            <h4>LinkedIn</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
