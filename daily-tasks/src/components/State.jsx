import { useState } from "react"

function UserProfile(){
    const [user, setUser]=useState({
        name:"Krishna",
        age:25
    })
    const updateAge =()=>{
        setUser({
            ...user,
            age: user.age+1,
        })
    }
    return(
        <div className="text-center text-orange-500">
            <p>Name:{user.name}</p>
            <p>Age:{user.age}</p>
            <button className="bg-blue-400 py-1 px-2 rounded text-white" onClick={updateAge}>Increase Age</button>
        </div>
    )
}

export default UserProfile;