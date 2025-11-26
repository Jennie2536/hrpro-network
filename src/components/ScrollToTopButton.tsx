import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { CustomButton } from './CustomButton';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <CustomButton
          variant="primary"
          onClick={scrollToTop}
          className="rounded-full p-3 shadow-lg hover:scale-105 transition-transform duration-200"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </CustomButton>
      )}
    </div>
  );
};

export default ScrollToTopButton;