"use client"

import Link from 'next/link'
import React from 'react'

const LinkItem = ({ target, link, comportLink }) => {

  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetId = target.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 163.06,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Link
    onClick={handleSmoothScroll}
     className='footer-container-top-column-link'
     href={target}
     target={comportLink}
    >
      {link}
    </Link>
  )
}

export default LinkItem
