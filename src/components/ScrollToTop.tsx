import React, { useState, useEffect } from 'react';
import '../assets/styles.css';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="scroll-to-top"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            cursor: 'pointer',
            backgroundColor: '#4CAF50',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '24px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
            zIndex: 1000
          }}
        >
          ↑
        </div>
      )}
    </>
  );
};

export default ScrollToTop;