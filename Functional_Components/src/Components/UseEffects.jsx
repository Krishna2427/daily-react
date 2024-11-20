import { useEffect, useState } from "react"

const UseEffects =()=>{
    const [data, setData] = useState();
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((res) => res.json())
        .then((data)=> setData(data))
    },[])
    return(
        <div>
            {data ? <p>{data.title}</p>:<p>Loading...</p>}
        </div>
    )
}
export default UseEffects;