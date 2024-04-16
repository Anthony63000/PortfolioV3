import Image from 'next/image'
import React from 'react'

import logoEntreprise from "@/images/header/logoAnthodev-black.svg"
import NavLinkFooter from './NavLinkFooter'
import NavLinkNetwork from './NavLinkNetwork'

import ImageFound from "@/images/banner/fondPcBanner.webp"

const Footer = () => {
  return (
    <footer>
        <section className='footer'>
        <Image
            className='footer-found'
            src={ImageFound}
            alt="Image d'un fond blanc avec des formes"
        />
        <div className='footer-container'>
            <div className='footer-container-top'>
                <div className='footer-container-top-column'>
                    <Image 
                        src={logoEntreprise}
                        className='footer-container-top-column-image'
                        alt='logo de la micro entreprise de Anthony Borel'
                    />
                </div>
                <div className='footer-container-top-column'>
                    <NavLinkFooter 
                        title="Navigation"
                    />
                </div>
                <div className='footer-container-top-column'>
                    <NavLinkNetwork
                        title="Mes Réseaux"
                    />
                </div>
            </div>
            <div className='footer-container-bottom'>
                <p className='footer-container-bottom-text'>
                    © 2024 Borel Anthony, Tous droits réservés.
                </p>
            </div>
        </div>
        </section>
    </footer>
  )
}

export default Footer
