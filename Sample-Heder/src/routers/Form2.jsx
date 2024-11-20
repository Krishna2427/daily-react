import React from 'react'

const Form2 = () => {
    const [input, setInput] = useState('');

    const handleSubmit=(e)=>{
         e.preventDefault();
         alert(`Form 2 Submitted with input: ${input}`)
    }
  return (
    <div>
        <h2>Form2</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(e)=> e.target.value}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form2