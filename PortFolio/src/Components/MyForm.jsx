import { useState } from "react";

function MyForm(){
    const [inputValue, setInputValue] = useState('');

    function handleChange(event){
          setInputValue(event.target.value);
    }
    return(
        <div>
            <input type="text" 
            className="border border-green-300"
            value={inputValue}
            onChange={handleChange}
            />
            <p>{inputValue}</p>
        </div>
    )
}
export default MyForm;