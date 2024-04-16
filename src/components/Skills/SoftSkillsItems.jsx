import Image from 'next/image'
import React, { useState } from 'react'

import chevronImage from "@/images/chevron/chevron.svg"

const SoftSkillsItems = ({ texts = [], dropDownText = [] }) => {

    const [animateDropDown, setAnimateDropDown] = useState(false)

    const [cliquedIndex, setCliquedIndex] = useState(null)

    const handleArrowClick = (index) => {
        setCliquedIndex(index === cliquedIndex ? null : index)
        const timer = setTimeout(() => {
            setAnimateDropDown(!animateDropDown)
        }, 500)
        return () => clearTimeout(timer)
    }

  return (
    <>
    {texts.map((text, index) => (
    <div 
        key={index}
        className='skills-container-row-right-bottom-container-bottom-container'
    >
        <div className='skills-container-row-right-bottom-container-bottom-container-top'>
            <p 
                key={index} 
                className='skills-container-row-right-bottom-container-bottom-container-top-text'
            >
                {text}
            </p>
        </div>
    </div>
    ))}
    </>
  )
}

export default SoftSkillsItems
