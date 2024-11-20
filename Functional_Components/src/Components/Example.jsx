import { useRef, useState } from "react"

const Example=()=>{
     const inputRef = useRef(null);
     
     const focusInput =()=>{
        inputRef.current.focus();
     };

     return(
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={focusInput}>Focus Input</button>
        </div>
     )
}

export default Example;