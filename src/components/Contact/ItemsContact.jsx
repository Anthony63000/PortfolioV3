import Image from 'next/image'
import React from 'react'

const ItemsContact = ({ description, text, srcImage, altImage, link }) => {
  return (
    <div className='contact-container-content-right-container-row'>
        <div className='contact-container-content-right-container-row-left'>
            <a 
                href={link}
                className='contact-container-content-right-container-row-left-link'
                target='_blank'
            >
                <Image
                    className='contact-container-content-right-container-row-left-link-image'
                    src={srcImage}
                    alt={altImage}
                />
            </a>
        </div>   
        <div className='contact-container-content-right-container-row-right'>
            <p className='contact-container-content-right-container-row-right-description'>
                {description}
            </p>
            <p className='contact-container-content-right-container-row-right-text'>
                {text}
            </p>
        </div>   
    </div>
  )
}

export default ItemsContact
