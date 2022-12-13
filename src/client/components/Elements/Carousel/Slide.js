import React from 'react';

const Slide = ({ children, width }) => {
  return (
    <div className="carousel-slide" style={{ width }}>
      {children}
    </div>
  );
};

export default Slide;
