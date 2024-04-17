"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import background from "../../images/banner/fondPcBanner.webp"
import Title from '../Title/Title'
import Stack from '../Stack/Stack'

import dataProject from "../../data/data.json"
import ButtonBlack from '../Buttons/ButtonBlack'
import Link from 'next/link'

import imageInternet from "@/images/internet/planete.svg"
import imageMore from "@/images/more/more.svg"
import { useDispatch, useSelector } from 'react-redux'
import { switchModalMode, toggleStateOfModal } from '@/redux/modalSlice/modalSlice'
import Modal from '../Modal/Modal'
import useObserverAnimation from '../Helper/ObserverAnimation'


const HomeProject = () => {

  const { observedRef, isIntersecting } = useObserverAnimation();

  const stateModal = useSelector((state) => state.modal.stateOfModal)
  const modalModeState = useSelector((state) => state.modal.modalMode)

  const dataSelected = dataProject.projectAhead

  const [imageIsFocused, setImageIsFocused] = useState(false)
  const [imageIsFocusedInside, setImageIsFocusedInside] = useState(false)
  const [animateTop, setAnimateTop] = useState(false)
  const [animateLeft, setAnimateLeft] = useState(false)
  const [animateRight, setAnimateRight] = useState(false)
  const [animateHover, setAnimateHover] = useState(false)
  const [animatedModal, setAnimatedModal] = useState(false)

  const dispatch = useDispatch()

  // On gère l'apprition de la modal et de l'effet sur l'image

  const mouseEnterInImage = () => {
    setImageIsFocused(true)
    setImageIsFocusedInside(true)
    const timer = setTimeout(() => {
      setAnimateHover(true)
    }, 100)
    return () => clearTimeout(timer)
  }

  const onMouseLeaveImage = () => {
    setAnimateHover(false)
    const timer = setTimeout(() => {
      setImageIsFocused(false)
      setImageIsFocusedInside(false)
    }, 500)
    return () => clearTimeout(timer)
  }

  // On gère l'ouverture et la fermeture de la modal

  const openOrCloseModal = () => {
    dispatch(toggleStateOfModal(true))
    dispatch(switchModalMode("homeProject"))
  }

  // On gère les animation à l'arrivé sur le composant

  useEffect(() => {
    if(isIntersecting) {
      setAnimateTop(true)
      const timer = setTimeout(() => {
        setAnimateLeft(true)
        setTimeout(() => {
          setAnimateRight(true)
        }, 400)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [isIntersecting])

  // On gère l'ouverture et la fermeture de la modal 

  useEffect(() => {
    if(stateModal) {
      setAnimatedModal(true)
    } else {
      setAnimatedModal(false)
    }
  }, [stateModal])

  const closeModal = () => { 
    setAnimatedModal(false)
    const timer = setTimeout(() => {
      dispatch(toggleStateOfModal(false))
    }, 500)
    return () => clearTimeout(timer)
  }

  return (
    <section id='homeProject' ref={observedRef} className='homeProject'>
        <Image
          src={background}
          alt='Image avec des formes sur un fond blanc'
          className='homeProject-found'
        />
        <div className='homeProject-container'>
          <div 
            className={`${'homeProject-container-top'}
              ${animateTop ? "homeProject-container-top-animate" : ""}
            `}
          >
            <Title
              title="Projet en avant"
            />
            <p className='homeProject-container-top-subTitle'>
              Décrouvrez le projet que J&apos;ai choisi de mettre en avant
            </p>
          </div>
          <div className='homeProject-container-bottom'>
            <div 
              className={`${'homeProject-container-bottom-left'}
                ${animateLeft ? "homeProject-container-bottom-left-animate" : ""}
              `}
            >
              <div className='homeProject-container-bottom-left-stack'>
                {dataSelected.stack.map((item, index) => (
                  <Stack
                    classStack={"homeProject-container-bottom-left-stack-image"}
                    width={40}
                    height={40}
                    key={index}
                    srcImage={item.stackSrc}
                    altImage={item.stackAlt}
                  />
                ))}
              </div>
              <h5 className='homeProject-container-bottom-left-title'>
                {dataSelected.title}
              </h5>
              <p className='homeProject-container-bottom-left-text'>
                {dataSelected.description}
              </p>
              <ButtonBlack
                addClass={"homeProject-container-bottom-left-link"}
                link="Voir mon portfolio"
                target="/portfolio"
              />
            </div>
            <div 
              className={`${'homeProject-container-bottom-right'}
                  ${animateRight ? "homeProject-container-bottom-right-animate": ""}
              `}
              onMouseEnter={mouseEnterInImage}
              onMouseLeave={onMouseLeaveImage}
            >
              <Image
                width={550}
                height={375}
                src={dataSelected.imageUrl}
                alt={dataSelected.imageAltText}
                className={`${'homeProject-container-bottom-right-image'}
                  ${imageIsFocused && imageIsFocusedInside ? "homeProject-container-bottom-right-image-hover" : ""}
                  ${animateHover ? "homeProject-container-bottom-right-image-hover-animate" : "homeProject-container-bottom-right-image-hover-animateReturn"}
                `}
              />
              {imageIsFocused && imageIsFocusedInside && (
                <div 
                  className={`${'homeProject-container-bottom-right-hover'}
                  ${animateHover ? "homeProject-container-bottom-right-hover-animate" : "homeProject-container-bottom-right-hover-animateReturn"}
                  `}
                >
                  <Image
                    src={imageMore}
                    alt='Image qui représente un plus pour ouvrir la modal'
                    className='homeProject-container-bottom-right-hover-image'
                    onClick={openOrCloseModal}
                  />
                  <Link 
                    href={dataSelected.linkWebSite}
                    className='homeProject-container-bottom-right-hover-link'
                    target='_blank'
                  >
                    <Image
                      className='homeProject-container-bottom-right-hover-link-image'
                      src={imageInternet}
                      alt="Image d'une planère qui représente internet"
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        {stateModal && modalModeState === "homeProject" && (
          <Modal
            title={dataSelected.title}
            imageModal={dataSelected.imageUrl}
            imageModalAlt={dataSelected.imageAltText}
            widthImage={400}
            heightImage={275}
            dataStack={dataSelected.stack}
            textDescription={dataSelected.description}
            textClient={dataSelected.client}
            linkSite={dataSelected.linkWebSite}
            linkGithub={dataSelected.linkGithub}
            animateModal={animatedModal}
            toogleCloseModal={closeModal}
          />
        )}
    </section>
  )
}

export default HomeProject
