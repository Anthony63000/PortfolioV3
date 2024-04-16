"use client"

import AboutMe from '@/components/AboutMe/AboutMe'
import BannerHome from '@/components/BannerHome/BannerHome'
import Contact from '@/components/Contact/Contact'
import HomeProject from '@/components/HomeProject/HomeProject'
import Portfolio from '@/components/Portfolio/Portfolio'
import Skills from '@/components/Skills/Skills'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Page = () => {

  const stateModal = useSelector((state) => state.modal.stateOfModal)

  useEffect(() => {
    if(stateModal) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [stateModal])

  return (
    <main>
      <div className='app'>
        <BannerHome />
        <AboutMe/>
        <HomeProject/>
        <Skills/>
        <Portfolio/>
        <Contact/>
      </div>
    </main>
  )
}

export default Page
