import React from 'react'
import LinkItem from './LinkItem'

const NavLinkNetwork = ({ title }) => {
  return (
    <>
      <h6 className='footer-container-top-column-title'>
        {title}
      </h6>
      <LinkItem
        comportLink="_blank"
        link="Github"
        target="https://github.com/Anthony63000"
      />
      <LinkItem
        comportLink="_blank"
        link="Malt"
        target="https://www.malt.fr/profile/anthonyborel?overview"
      />
      <LinkItem
        comportLink="_blank"
        link="Linkedin"
        target="https://www.linkedin.com/in/anthony-borel-180698268/"
      />
    </>
  )
}

export default NavLinkNetwork
