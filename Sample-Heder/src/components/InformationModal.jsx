import React from 'react'

import '../styles/InformationModal.css';
function InformationModal({isOpen, onClose, message}) {
    if(!isOpen){
        return null;
    }
  return (
    <div className='modal-ovelay' onClick={onClose}>
        <div className='modal-content bg-white' onClick={(e)=> e.stopPropagation()}>
             <button onClick={onClose}>X</button>
             <h3>Information</h3>
             <p>{message}</p>
             <button onClick={onClose} className='bg-danger text-white'>Close</button>
        </div>
    </div>
  )
}

export default InformationModal