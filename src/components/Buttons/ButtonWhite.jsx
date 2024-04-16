import Link from 'next/link'
import React from 'react'

const ButtonWhite = ({ target, link }) => {
  return (
    <Link className='buttonWhite' href={target}>
        {link}
    </Link>
  )
}

export default ButtonWhite
