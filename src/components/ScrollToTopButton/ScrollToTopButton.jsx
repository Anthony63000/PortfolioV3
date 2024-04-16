"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageChevron from '@/images/chevron/chevron-white.svg';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div onClick={scrollToTop} className={`buttonScroll ${isVisible ? 'buttonScroll-visible' : ''}`}>
      <Image
        src={ImageChevron}
        alt="Image d'une flèche qui va vers le haut"
        className='buttonScroll-image'
      />
    </div>
  );
};

export default ScrollToTopButton;


