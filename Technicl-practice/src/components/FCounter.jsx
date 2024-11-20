import React, { useEffect, useState } from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem';

const FCounter = () => {
    const [time, setTime] = useState(0);

    useEffect(()=>{
        const timeId = setInterval(()=>{
            setTime((prevTime) => prevTime + 1);
        }, 1000)
        return ()=>clearInterval(timeId)
    },[])
  return (
    <div>FCounter {time} seconds</div>
  )
}

export default FCounter