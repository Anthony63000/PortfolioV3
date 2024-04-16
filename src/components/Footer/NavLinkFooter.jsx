
import React from 'react'
import LinkItem from './LinkItem'

const NavLinkFooter = ({ title }) => {
  return (
    <>
      <h6 className='footer-container-top-column-title'>
        {title}
      </h6>
      <LinkItem
        link="Accueil"
        target="/bannerHome"
      />
      <LinkItem
        link="Mes Compétences"
        target="/skills"
      />
      <LinkItem
        link="Mes Réalisations"
        target="/portfolio"
      />
      <LinkItem
        link="Contactez-moi"
        target="/contact"
      />
    </>
  )
}

export default NavLinkFooter
