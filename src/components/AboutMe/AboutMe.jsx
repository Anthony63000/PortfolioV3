import React, { useEffect, useState } from 'react'
import Title from '../Title/Title'
import ButtonWhite from '../Buttons/ButtonWhite'

import Image from 'next/image'
import ImageAbout from "@/images/about/about.webp"
import ImageFound from "@/images/banner/fondPcBanner.webp"


import useObserverAnimation from '../Helper/ObserverAnimation'

const AboutMe = () => {

  const { observedRef, isIntersecting } = useObserverAnimation();

  const [animateLeft, setAnimateLeft] = useState(false)
  const [animateRight, setAnimateRight] = useState(false)

  useEffect(() => {
    if(isIntersecting) {
      setAnimateLeft(true)
      const timer = setTimeout(() => {
        setAnimateRight(true)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [isIntersecting])

  return (
    <section id='aboutMe' className='aboutMe' ref={observedRef}>
      <Image 
        className='aboutMe-found'
        src={ImageFound}
        alt="Image d'un fond blanc avec des formes"
      />
      <div className='aboutMe-container'>
        <div 
          className={`${'aboutMe-container-left'}
            ${animateLeft ? "aboutMe-container-left-animate" : ""}
          `}
        >
            <Title
                title="Développeur web | Front-End"
            />
            <p className='aboutMe-container-left-text'>
              En tant que développeur web front end, je crée des interfaces utilisateur interactives et esthétiques 
              pour les applications web. Je traduis les conceptions 
              graphiques en code informatique, en veillant à ce que les interfaces soient à la fois fonctionnelles et conviviales. 
              Mon objectif est de fournir des expériences utilisateur exceptionnelles à travers des interfaces intuitives et 
              attrayantes.
            </p>
            <ButtonWhite 
              link="Mes Compétences"
              target="/skills"
            />
        </div>
        <div 
          className={`${'aboutMe-container-right'}
          ${animateRight ? "aboutMe-container-right-animate" : ""}
          `}
        >
          <Image
            src={ImageAbout}
            alt="Image d'un pc portable"
            className='aboutMe-container-right-image'
          />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
