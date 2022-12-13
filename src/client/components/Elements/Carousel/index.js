import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import './style.css';

const Carousel = ({ children }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIdx = (newIdx) => {
    if (newIdx < 0) {
      newIdx = React.Children.count(children) - 1;
    } else if (newIdx >= React.Children.count(children)) {
      newIdx = 0;
    }

    setActiveIdx(newIdx);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIdx(activeIdx + 1);
      }
    }, 5000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIdx(activeIdx + 1),
    onSwipedRight: () => updateIdx(activeIdx - 1)
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIdx * 100}%)` }}
      >
        {React.Children.map(children, (child, idx) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
      <div className="indicator">
        <button
          onClick={() => {
            updateIdx(activeIdx - 1);
          }}
        >
          &lt;&lt;
        </button>
        {React.Children.map(children, (child, idx) => {
          return (
            <button
              className={`${idx === activeIdx ? 'active' : {}}`}
              onClick={() => {
                updateIdx(idx);
              }}
            >
              {idx + 1}
            </button>
          );
        })}
        <button
          onClick={() => {
            updateIdx(activeIdx + 1);
          }}
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
