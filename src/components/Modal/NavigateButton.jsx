import Image from 'next/image'
import React from 'react'

const NavigateButton = ({ 
    prevOrNextProject, 
    text, 
    imageNavigate, 
    altImageNavigate, 
    classButton }) => {
  return (
    <div 
        className={classButton}
        onClick={prevOrNextProject}
    >
      <Image 
        src={imageNavigate}
        alt={altImageNavigate}
        className='modal-container-right-row-button-image'
      />
      <p
        className='modal-container-right-row-button-text'
        >
        {text}
      </p>
    </div>
  )
}

export default NavigateButton
