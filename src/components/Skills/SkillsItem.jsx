import Image from 'next/image'
import React, { useState } from 'react'

const SkillsItem = ({ stackImageSrc, altImageSrc, stack }) => {

  const [mouseIsInDiv, setMouseIsInDiv] = useState("image")
  const [animateImage, setAnimateImage] = useState(false)

  const mouseHoverDiv = () => {
    setAnimateImage(true)
    const timer = setTimeout(() => {
      setMouseIsInDiv("text")
    }, 500)
    return () => clearTimeout(timer)
  }

  const mouseNotHoverDiv = () => {
    setAnimateImage(false)
    const timer = setTimeout(() => {
      setMouseIsInDiv("image")
    }, 500)
    return () => clearTimeout(timer)
  }

  return (
    <div 
      className={`${"skills-container-row-left-container-bottom-container"}
      ${animateImage ? 
        "skills-container-row-left-container-bottom-container-animate" 
        : 
        "skills-container-row-left-container-bottom-container-animateReturn"}
      `}
      onMouseEnter={mouseHoverDiv}
      onMouseLeave={mouseNotHoverDiv}
    >
      {mouseIsInDiv === "image" ? (
        <Image 
          src={stackImageSrc}
          alt={altImageSrc}
          className={`${'skills-container-row-left-container-bottom-container-image'}
          ${animateImage ? "skills-container-row-left-container-bottom-container-image-animate"
          : 
          ""
        }
          `}
        />
      ) : (
        <p className={`${'skills-container-row-left-container-bottom-container-stack'}
          ${animateImage ? 
          "" : "skills-container-row-left-container-bottom-container-stack-animate"
          }
        `}>
          {stack}
        </p>
      )}
    </div>
  )
}

export default SkillsItem
