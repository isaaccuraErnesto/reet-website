import React, { useState, useEffect } from 'react';

const AnimatedArrow = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    console.log(opacity);
    if (typeof window !== 'undefined') {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        console.log(maxScroll);
        if (currentScrollPos > 0 && currentScrollPos <= maxScroll) {
          setOpacity(0);
          console.log(currentScrollPos);
        } else {
          setOpacity(1);
        }
      };
    }
    console.log(opacity);
  }, [opacity]);

  return (
    <div
      className='arrow'
      style={{ opacity: opacity, transition: 'all 1000ms ease-in-out' }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default AnimatedArrow;
