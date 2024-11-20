import { useState } from "react";

function NameForm(){
    const [name, setName] = useState('');

    const handleChange = (event)=>{
        setName(event.target.value);
    };
    return(
        <div>
            <input type="text" 
            value={name}
            onChange={handleChange}
            placeholder="Enter your Name"
            />
            <p>Your name is:{name}</p>
        </div>
    )
}

export default NameForm;