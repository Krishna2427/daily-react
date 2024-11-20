import React from 'react'

const ImageModal = ({isOpen, onClose,imgSrc,  imaAlt, children}) => {
    if(!isOpen){
        return null;
    }
  return (
    <div className='modal-overlay' onClick={onClose}>
        <div className='modal-content' onClick={(e)=>e.stopPropagation()}>
           <button className='close-btn' onClick={onClose}>X</button>
           <img src={imgSrc} alt={imaAlt} className='modal-image'/>
        </div>
    </div>
  )
}

export default ImageModal