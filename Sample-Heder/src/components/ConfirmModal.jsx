import React from 'react'

const ConfirmModal = ({isOpen, onClose, confirmModal, children}) => {
    if(!isOpen){
        return null;
    }
  return (
    <div className='modal-overlay' onClick={onclose}>
        <div className='modal-content' onClick={(e)=>e.stopPropagation()}>
            <button className='close-btn' onClick={onClose}>X</button>
            <h3>{children}</h3>
            <div>
                <button onClick={confirmModal}>Confirm</button>
                <button onClick={onClose} className='btn-cancel'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmModal