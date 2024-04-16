import React, { useEffect, useState } from 'react'
import NavLinkItem from './NavLinkItem'

const NavBar = () => {

  const [activeSection, setActiveSection] = useState("bannerhome");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentActiveSection = null;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 300 && rect.bottom >= 300) {
          currentActiveSection = section.id;
        }
      });
      setActiveSection(currentActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className='header-containerAction-right-nav'>
      <NavLinkItem 
        link="Accueil"
        target="#bannerHome"
        activeClass={activeSection === "bannerHome" || activeSection === "aboutMe" || activeSection === "homeProject" ? "header-containerAction-right-nav-link-active" : ""}
      />
      <NavLinkItem 
        link="Compétences"
        target="#skills"
        activeClass={activeSection ==="skills" ? "header-containerAction-right-nav-link-active" : ""}
      />
      <NavLinkItem 
        link="Réalisations"
        target="#portfolio"
        activeClass={activeSection ==="portfolio" ? "header-containerAction-right-nav-link-active" : ""}
      />
      <NavLinkItem 
        link="Contact"
        target="#contact"
        activeClass={activeSection ==="contact" ? "header-containerAction-right-nav-link-active" : ""}
      />
    </nav>
  )
}

export default NavBar
