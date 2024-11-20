import { useState } from "react"

const RealTimeCount = ()=>{
    const [count, setCount] = useState(0);

    const incrementCount=()=>{
         setCount(count + 1);
    }
    return(
        <div className="text-center mt-6">
            <h1>Count:{count}</h1>
            <button className="bg-blue-500 rounded-sm py-1 px-2  text-white" onClick={incrementCount}>Increment</button>
        </div>
    )
}
export default RealTimeCount;