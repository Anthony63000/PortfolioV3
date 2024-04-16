import Link from 'next/link'
import React from 'react'

const ButtonBlack = ({ link, target, addClass }) => {
  return (
    <Link href={target} className={`${'buttonBlack'} ${addClass}`}>
        {link}
    </Link>
  )
}

export default ButtonBlack
