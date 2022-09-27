import React from 'react';
import './style.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Info</h2>
      <p>
        <span className="contact-label">Phone: </span>
        <span className="contact-detail">(804)762-0267</span>
      </p>
      <p>
        <a className="contact-label" href="mailto:noelle.huchette@gmail.com">
          Email
        </a>
      </p>
      <p>
        <a
          className="contact-label"
          href="https://www.linkedin.com/in/noelle-huchette/"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
};

export default Contact;
