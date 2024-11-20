import { useEffect, useState } from "react"

const Home =()=>{
    const [data, setDate] = useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res)=> res.json())
        .then((data)=> setDate(data));
    }, []);
    return(
        <div>
            {data && data.map((item)=>{
                return <p key={item.id} className="text-orange-500">{item.title}</p>
            })}
        </div>
    )
}
export default Home;