import { useEffect, useState } from "react"

const Users = ()=>{
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((data)=> setData(data))
        .then((error)=> console.error('Errors fetching data:', error))
    }, [])
    return(
        <div style={{display:"flex", flexWrap:'wrap', justifyContent:'space-around'}}>
            {data.map((user)=>(
                <div key={user.id} className="card">
                    <h3>{user.name}</h3>
                    <p><strong>UserName:</strong>{user.username}</p>
                    <p><strong>Email:</strong>{user.email}</p>
                    <p><strong>phone:</strong>{user.phone}</p>
                    <p><strong>address:</strong>{user.address.street},{user.address.suite},{user.address.city},{user.address.zipcode},{user.address.geo.let}{user.address.geo.lng}</p>
                    <p><strong>Website:</strong>{user.website}</p>
                </div>
            ))}
        </div>
    )
}
export default Users;