"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import Logo from "../../images/header/logoAnthodev-black.svg"
import Network from '../Network/Network'

import gitHubLogo from "../../images/network/github.svg"
import NavBar from './NavBar'

function Header() {

    const [headerMode, setHeaderMode] = useState("begin")
    const [animateHeaderBegin, setAnimateHeaderBegin] = useState(false)
    const [animateHeaderAction, setAnimateHeaderAction] = useState(false)

    // On surveille le scroll pour afficher le header correspondant

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            if(currentPosition === 0) {
                setHeaderMode("begin")
            } else {
                setHeaderMode("action")
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.addEventListener("scroll", handleScroll)
        }
    }, [])

    // On gère les animations du header 

    useEffect(() => {
        if(headerMode === "begin") {
            setAnimateHeaderAction(false)
            const timer = setTimeout(() => {
                setAnimateHeaderBegin(true)
            }, 100)
            return () => clearTimeout(timer)
        } else if(headerMode === "action") {
            setAnimateHeaderBegin(false)
            const timer = setTimeout(() => {
                setAnimateHeaderAction(true)
            }, 100)
            return () => clearTimeout(timer)
        } 
    }, [headerMode])

  return (
    <header>
        <section className='header'>
            {headerMode === "begin" && (
                <div className={`
                    ${'header-container'} 
                    ${animateHeaderBegin ? "header-container-animate" : "header-container"}`}
                >
                <div className='header-container-left'>
                    <Image 
                        className='header-container-left-image' 
                        src={Logo}
                        alt="Logo de l'entreprise du développeur borel anthony"
                    />
                    <h1 className='header-container-left-title'>
                        Porfolio
                    </h1>
                    <p className='header-container-left-subTitle'>
                        Borel Anthony
                    </p>
                </div>
                <div className='header-container-right'>
                    <Network 
                        targetLink="https://github.com/Anthony63000"
                        linkClass="header-container-right-link"
                        imageLinkClass="header-container-right-link-image"
                        imageSrc={gitHubLogo}
                        altImage="Image du logo de gitHub"
                    />
                </div>
            </div>
            )}
            {headerMode === "action" && (
                <div className={`${'header-containerAction'}
                    ${animateHeaderAction ? "header-containerAction-animate" : ""}`}>
                    <div className='header-containerAction-left'>
                        <Image 
                            className='header-container-left-image' 
                            src={Logo}
                            alt="Logo de l'entreprise du développeur borel anthony"
                        />
                        <h1 className='header-container-left-title'>
                            Porfolio
                        </h1>
                        <p className='header-container-left-subTitle'>
                            Borel Anthony
                        </p>
                    </div>
                    <div className='header-containerAction-right'>
                        <NavBar/>
                    </div>
                </div>
            )}
        </section>
    </header>
  )
}

export default Header
