import React, { useRef } from 'react'
import Counter from './components/Counter'
import { Button } from 'react-bootstrap';

function FocusInput() {
    const inputRef = useRef(null);

    const focusInput=()=>{
         inputRef.current.focus();
    }
  return (
    <Counter>
          <input type="text" ref={inputRef}/>
          <Button onClick={focusInput}>Focus Input</Button>
    </Counter>
  )
}

export default FocusInput