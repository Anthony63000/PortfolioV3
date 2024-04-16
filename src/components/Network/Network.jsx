import Image from 'next/image'
import React from 'react'

function Network({
    targetLink,
    linkClass,
    imageLinkClass,
    imageSrc,
    altImage
}) {
  return (
    <a
        href={targetLink} 
        className={linkClass}
        target='_blank'
    >
        <Image 
            className={imageLinkClass}
            src={imageSrc}
            alt={altImage}
        />
    </a>
  )
}

export default Network
