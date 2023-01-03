import React from 'react';

const Slide = ({ children, width, image, title, subtitle }) => {
  return (
    <div
      className="carousel-slide"
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      {title ? <h3 className="title">{`${title}`}</h3> : ''}
      {subtitle ? <h5 className="subtitle">{`${subtitle}`}</h5> : ''}
      {children}
    </div>
  );
};

export default Slide;
