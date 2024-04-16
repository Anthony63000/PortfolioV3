import Image from 'next/image'
import React, { useState } from 'react'

import iconImage from "@/images/more/more.svg"
import { useDispatch } from 'react-redux'
import { switchModalId, switchModalMode, toggleStateOfModal } from '@/redux/modalSlice/modalSlice'

const WorksItem = ({ ImageWorks, altImageWorks, title, mode, animateItem }) => {

  const [animateDivSup, setAnimateDivSup] = useState(false)

  const dispatch = useDispatch()

  const handleClickedProject = () => {
    dispatch(switchModalId(mode))
    dispatch(toggleStateOfModal(true))
    dispatch(switchModalMode("portfolio"))
  }

  const [onMouseHover, setOnMouseHover] = useState(false)

  const mouseEnter = () => {
    setOnMouseHover(true)
    const timer = setTimeout(() => {
      setAnimateDivSup(true)
    }, 100)
    return () => clearTimeout(timer)
  }
  
  const mouseLeave = () => {
    setAnimateDivSup(false)
    const timer = setTimeout(() => {
      setOnMouseHover(false)
    }, 350)
    return () => clearTimeout(timer)
  }

  return (
    <div 
      className={`${'portfolio-container-row-container-item'}
        ${animateItem}`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={handleClickedProject}
    >
      <Image
        src={ImageWorks}
        alt={altImageWorks}
        className='portfolio-container-row-container-item-image'
        width={400}
        height={300}
      />
      {onMouseHover && (
        <div className={`${'portfolio-container-row-container-item-divSup'}
        ${animateDivSup ? 
          "portfolio-container-row-container-item-divSup-animate"
        :
        "portfolio-container-row-container-item-divSup-animateReturn"
        }`}
        >
          <div className='portfolio-container-row-container-item-divSup-top'>
            <h6 className='portfolio-container-row-container-item-divSup-top-title'>
              {title}
            </h6>
          </div>
          <div className='portfolio-container-row-container-item-divSup-bottom'>
            <Image
              className='portfolio-container-row-container-item-divSup-bottom-image'
              src={iconImage}
              alt='logo qui représsente un petit plus sur un fond noir'
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default WorksItem
