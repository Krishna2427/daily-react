import React, { useState } from 'react'

const Form1 = () => {
    const [input, setInput] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Form 1 Submitted with input:${input}`);
    };
  return (
    <div>
        <h2>Form1</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Form1