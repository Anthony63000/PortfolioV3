"use client"

import { toggleStateOfModal } from '@/redux/modalSlice/modalSlice'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemModal from './ItemModal'
import ItemModalStack from './ItemModalStack'

import githubLogo from "@/images/network/github.svg"
import planeteLogo from "@/images/internet/planete-black.svg"
import Link from 'next/link'
import NavigateButton from './NavigateButton'

import chevronLeft from "@/images/chevron/chevron-left.svg"
import chevronRight from "@/images/chevron/chevron-right.svg"

const Modal = ({ 
  title,
  imageModal,
  imageModalAlt,
  widthImage,
  heightImage,
  dataStack,
  textDescription, 
  textClient,
  linkSite,
  linkGithub,
  prevProject,
  nextProject,
  nextTitle,
  previousTitle,
  animateModal,
  toogleCloseModal
}) => {

  const stateModeModal = useSelector((state) => state.modal.modalMode)

  return (
    <section className='modal'>
        <div className='modal-container'>
            <div onClick={toogleCloseModal} className='modal-container-left'>
            </div>
            <div 
              className={`${'modal-container-right'}
              ${animateModal ? "modal-container-right-animate" : "modal-container-right-animateReturn"}
              `}
            >
                <div className='modal-container-right-top'>
                  <h6 className='modal-container-right-top-title'>
                    {title}
                  </h6>
                  <div onClick={toogleCloseModal} className='modal-container-right-top-close'></div>
                </div>
                <div className='modal-container-right-row'>
                  <Image
                    className='modal-container-right-row-image'
                    src={imageModal}
                    alt={imageModalAlt}
                    width={widthImage}
                    height={heightImage}
                  />
                </div>
                <div className='modal-container-right-row'>
                  <h6 className='modal-container-right-row-title'>
                    Caractéristiques du projet :
                  </h6>
                  <ItemModal 
                    title="Client :"
                    text={textClient}
                  />
                  <ItemModal 
                    title="Description :"
                    text={textDescription}
                  />
                  <ItemModalStack 
                    title="Technologies :"
                    dataStack={dataStack}
                  />
                </div>
                <div className='modal-container-right-bottom'>
                  <Link
                    className='modal-container-right-bottom-link'
                    href={linkGithub}
                    target='_blank'
                  >
                    <Image
                      className='modal-container-right-bottom-link-image'
                      src={githubLogo}
                      alt='Image du logo de github'
                    />
                  </Link>
                  {linkSite !== "" && (
                    <Link
                    href={linkSite}
                    target='_blank'
                    className='modal-container-right-bottom-link'
                    >
                      <Image
                      className='modal-container-right-bottom-link-image'
                      src={planeteLogo}
                      alt="Image d'une planète qui représente internet"
                      />
                    </Link>
                  )}
                </div>
                {stateModeModal === "portfolio" && (
                  <div className='modal-container-right-navigate'>
                    <NavigateButton
                      imageNavigate={chevronLeft}
                      altImageNavigate="Image d'une flèche qui va vers la gauche"
                      text={previousTitle}
                      classButton={"modal-container-right-navigate-buttonLeft"}
                      prevOrNextProject={prevProject}
                    />
                    <NavigateButton
                      imageNavigate={chevronRight}
                      altImageNavigate="Image d'une flèche qui va vers la droite"
                      text={nextTitle}
                      classButton={"modal-container-right-navigate-buttonRight"}
                      prevOrNextProject={nextProject}
                    />
                  </div>
                )}
            </div>
        </div>
    </section>
  )
}

export default Modal
