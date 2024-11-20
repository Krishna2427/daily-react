import { useState, useEffect } from "react";

const Time = ()=>{
    const [time, setTime] = useState(new Date());
    useEffect(()=>{
        const timeIntervalId = setInterval(()=>{
            setTime(new Date())
        }, 1000)
        return ()=> clearInterval(timeIntervalId);
    },[])
    return(
        <div className="container">
            <p>Time:{time.toLocaleString()}</p>
        </div>
    )
}
export default Time;