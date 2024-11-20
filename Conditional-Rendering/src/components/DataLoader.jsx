import React, { useEffect, useState } from 'react'

function DataLoader() {
    const [isloaded, setIsLoaded] = useState(true);
    useEffect(()=>{
       setInterval(()=>{
        setIsLoaded(false)
       }, 3000)
    }, []);
  return (
    <div>
        <h1>DataLoader</h1>
        {isloaded ? (
            <h1> Data Loading...</h1>
        ):(
            <h1>Data has been Loaded</h1>
        )}
    </div>
  )
}

export default DataLoader