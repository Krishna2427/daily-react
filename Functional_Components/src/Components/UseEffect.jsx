import { useEffect, useState } from "react";


const UseEffect = ()=>{
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        s
        const intervalId = setInterval(()=>{
            setCount((prevCount)=> prevCount + 1);
        }, 1000)

        return ()=> clearInterval(intervalId);
    })
    return(
        <div>
            <h1>Use Effect Clean up</h1>
             <h2>Counter:{count}</h2>
             <h4>Date:{Date + 1}</h4>
        </div>
    )
}
export default UseEffect;