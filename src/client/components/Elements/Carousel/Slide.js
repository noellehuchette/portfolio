import React from 'react';

const Slide = ({ children, width, image }) => {
  return (
    <div
      className="carousel-slide"
      style={{
        width: width,
        backgroundImage: `url(${image})`
      }}
    >
      {children}
    </div>
  );
};

export default Slide;
