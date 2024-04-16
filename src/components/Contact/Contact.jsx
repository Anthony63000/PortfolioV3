import React, { useEffect, useState } from 'react'
import Title from '../Title/Title'
import Formulaire from './Formulaire'
import ItemsContact from './ItemsContact'

import ImageMail from "@/images/contact/gmail.svg"
import ImageLocalisation from "@/images/contact/localisation.svg"

import ImageFound from "@/images/banner/fondPcBanner.webp"
import Image from 'next/image'
import useObserverAnimation from '../Helper/ObserverAnimation'

const Contact = () => {

  const [animateTop, setAnimateTop] = useState(false)
  const [animateLeft, setAnimateLeft] = useState(false)
  const [animateRight, setAnimateRight] = useState(false)

  const { observedRef, isIntersecting } = useObserverAnimation();

  useEffect(() => {
    if(isIntersecting) {
      setAnimateTop(true)
      const timer = setTimeout(() => {
        setAnimateLeft(true)
        setTimeout(() => {
          setAnimateRight(true)
        }, 500)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isIntersecting])

  return (
    <section id='contact' ref={observedRef} className='contact'>
      <Image
        className='contact-found'
        src={ImageFound}
        alt="Image d'un fond blan avec des formes"
      />
      <div className='contact-container'>
        <div className={`${'contact-container-top'}
          ${animateTop ? "contact-container-top-animate" : ""}
        `}>
          <Title 
            title="Contactez-moi"
          />
          <p className='contact-container-top-subTitle'>
            N'hésitez pas à m'envoyer un message 
          </p>
        </div>
        <div className='contact-container-content'>
          <div className={`${'contact-container-content-left'}
            ${animateLeft ? "contact-container-content-left-animate" : ""}
          `}>
            <div className='contact-container-content-left-row'>
              <Formulaire />
            </div>
          </div>
          <div className={`${'contact-container-content-right'}
            ${animateRight ? "contact-container-content-right-animate" : ""}
          `}>
            <div className='contact-container-content-right-container'>
              <div className='contact-container-content-right-container-top'>
                <h3 className='contact-container-content-right-container-top-title'>
                  Mes coordonnées de contact
                </h3>
              </div>
              <ItemsContact
                description="Par mail"
                text="anthony.borel02@gmail.com"
                srcImage={ImageMail}
                altImage="Image du logo de gmail"
                link="mailto:anthony.borel02@gmail.com"
              />
              <ItemsContact
                description="Localisation"
                text="Auvergne-Rhône-Alpes, Puy-de-dôme"
                srcImage={ImageLocalisation}
                altImage="Icon qui représente la localisation"
                link={"https://www.google.fr/maps/place/Puy-de-D%C3%B4me/@45.7708922,2.5273519,9z/data=!3m1!4b1!4m6!3m5!1s0x47f71df7d378185f:0x3093cafcbe32970!8m2!3d45.7801582!4d3.0821043!16zL20vMG1ncTI?entry=ttu"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
