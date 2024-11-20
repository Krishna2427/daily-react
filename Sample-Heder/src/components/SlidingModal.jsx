import React from 'react'
import { FaClosedCaptioning, FaTimes } from 'react-icons/fa';
import '../styles/slidebar.css'
const SlidingModal = ({ isOpen, onClose, direction = 'left', title, items }) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div className='modal-overlay' onClick={onClose}>
            <div
                className={`modal-content slide-${direction}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button className='close-btn' onClick={onClose}><FaClosedCaptioning/></button>
                <h3>{title}</h3>
                <ul>
                    {items.map((item, index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SlidingModal