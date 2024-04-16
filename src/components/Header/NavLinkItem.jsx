
import React from 'react';

const NavLinkItem = ({ link, target, activeClass }) => {

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
    <a
      href={target}
      className={`${'header-containerAction-right-nav-link'}
      ${activeClass}
      `}
      onClick={handleSmoothScroll}
    >
      {link}
    </a>
  );
};

export default NavLinkItem;

