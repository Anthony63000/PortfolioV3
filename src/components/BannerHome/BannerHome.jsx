"use client"

import React, { useEffect, useState } from 'react'
import ButtonBlack from '../Buttons/ButtonBlack'

import imageBanner from "../../images/banner/bannerImage.svg"
import foundImageBanner from "@/images/banner/fondPcBanner.webp"
import Image from 'next/image'

import dataJSON from "@/data/data.json"

const BannerHome = () => {

  const imageCarrouselle = dataJSON.imageCarrouselleBanner.images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animateBannerFirst, setAnimateBannerFirst] = useState(false)
  const [animateBannerSecond, setAnimateBannerSecond] = useState(false)

    // On gère le carrouselle

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCarrouselle.length);
      }, 3000);
      return () => clearInterval(interval);
  }, [imageCarrouselle.length]);

  // gestion de l'animation 

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateBannerFirst(true)
      setTimeout(() => {
        setAnimateBannerSecond(true)
      }, 100)
    }, 350)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id='bannerHome' className='bannerHome'>
      <Image 
        className='bannerHome-foundImage'
        src={foundImageBanner} 
        alt="Fonds blanc avec différente forme" 
      />
      <div className='bannerHome-container'>
        <div 
          className={`${'bannerHome-container-left'}
          ${animateBannerFirst ? "bannerHome-container-left-animate" : ""}
          `}
        >
          <h2 className='bannerHome-container-left-title'>
            Borel <br/> Anthony
          </h2>
          <h3 className='bannerHome-container-left-subTitle'>
            Développeur web | Front-End
          </h3>
          <p className='bannerHome-container-left-text'>
            Ensemble, transformons vos idées en une expérience web immersive et innovante.
          </p>
          <ButtonBlack 
            link="Contactez-moi"
            target="/contact"
          />
        </div>
        <div 
          className={`${'bannerHome-container-right'}
          ${animateBannerSecond ? "bannerHome-container-right-animate" : ""}
          `}
        >
            <Image 
              className='bannerHome-container-right-image'
              src={imageBanner} 
              alt="Image d'un écran d'un ordinateur avec des images qui défillent" 
            />
            <Image
              className='bannerHome-container-right-imageAbsolute'
              width={429}
              height={226}
              src={imageCarrouselle[currentImageIndex].url}
              alt={imageCarrouselle[currentImageIndex].alt}
            />
        </div>
      </div>
    </section>
  )
}

export default BannerHome
