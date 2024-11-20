import React, { useState } from 'react'

function Form() {
    const [value, setValue] = useState('');
    const [userData, setUserData] = useState([]);

    const handleChange = (e) => {
        setValue(e.target.value);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(value.trim() ===''){
            alert('please enter the values before submitting:');
            return;
        }
        setUserData([...userData, value]);

        setValue('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="name"
                    value={value}
                    onChange={handleChange} />
                <button type='submit'>submit</button>
            </form>
            <div>
               {userData.map((user, index)=>(
                <li key={index}>
                    {user}
                </li>
               ))}
            </div>
            
        </div>
    )
}

export default Form