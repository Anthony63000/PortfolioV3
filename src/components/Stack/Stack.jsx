
import Image from 'next/image'
import React from 'react'

const Stack = ({ srcImage, altImage, width, height, classStack }) => {
  return (
    <Image
      className={classStack}
      src={srcImage}
      alt={altImage}
      width={width}
      height={height}
    />
  )
}

export default Stack
