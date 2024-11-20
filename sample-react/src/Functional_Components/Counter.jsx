import { useState } from "react"

function Counter() {
    
    const [count, setCount] = useState(0)

    const increment = ()=>{
        setCount(count + 1)
    }
    return(
        <div>
            <h1>Functional Component with States </h1>
              <h2>count:{count}</h2>
             <button onClick={increment}>click me</button>
        </div>
    )
}
export default Counter;