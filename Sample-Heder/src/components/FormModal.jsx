import React, { useState } from 'react'

const FormModal = ({isOpen, onClose, onSubmit}) => {
    const [name, setName] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit(name);
        onClose();
    }
    if(!isOpen){
        return null;
    }
  return (
    <div className='modal-overlay' onClick={onClose}>
         <div className='modal-content bg-white rounded-3' onClick={(e)=>e.stopPropagation()}>
            <button onClick={onClose} className='btn-close-modal'>X</button>
            <h2>Enter Your Name</h2>
            <form onSubmit={handleSubmit}>
                  <input type="text" 
                         value={name}
                         onChange={(e)=>setName(e.target.value)}
                         placeholder='Enter your name'
                         className='form-control'
                         required
                  />
                  <button type='submit' className='rounded-1'>submit</button>
            </form>
         </div>
    </div>
  )
}

export default FormModal