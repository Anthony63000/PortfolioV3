import React from 'react'
import SoftSkillsItems from './SoftSkillsItems'

const SoftSkills = ({ title, texts, dropDownText }) => {
  return (
    <div className='skills-container-row-right-bottom-container'>
        <div className='skills-container-row-right-bottom-container-top'>
            <h6 className='skills-container-row-right-bottom-container-top-title'>
                {title}
            </h6>
        </div>
        <div className='skills-container-row-right-bottom-container-bottom'>
            <SoftSkillsItems 
                texts={texts}
                dropDownText={dropDownText}
            />
        </div>
    </div>
  )
}

export default SoftSkills
