import React from 'react'

import '../styles/modals.css'
const Modals = ({isOpen, onClose, children}) => {
  if(!isOpen){
    return null;
  }
  return (
    <div className='modal-overlay' onClick={onClose}>
       <div className='modal-content' onClick={(e)=>e.stopPropagation()}>
           <button className='close-btn' onClick={onClose}>X</button>
           {children}
       </div>
    </div>
  )
}

export default Modals;