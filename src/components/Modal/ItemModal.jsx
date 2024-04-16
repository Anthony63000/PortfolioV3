import React from 'react'

const ItemModal = ({ title, text }) => {
  return (
    <div className='modal-container-right-row-container'>
            <p className='modal-container-right-row-container-title'>
                {title}
            </p>
            <p className='modal-container-right-row-container-text'>
                {text}
            </p>
    </div>
  )
}

export default ItemModal
