import Image from 'next/image'
import React from 'react'

const ItemModalStack = ({ dataStack, title }) => {
  return (
    <div className='modal-container-right-row-container'>
        <div className='modal-container-right-row-container-left'>
            <p className='modal-container-right-row-container-left-title'>
                {title}
            </p>
        </div>
        <div className='modal-container-right-row-container-right'>
            {dataStack.map((item, index) => (
            <Image 
                key={index}
                src={item.stackSrc}
                alt={item.stackAlt}
                className='modal-container-right-row-container-right-stackImage'
                height={40}
                width={40}
            />
      ))}
        </div>
    </div>
  )
}

export default ItemModalStack
