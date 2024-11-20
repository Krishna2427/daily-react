import { useState } from "react";

function UserPro(){
    const [user, setUser] = useState({
        name:'krishna',
        age:23,
        location:"India",
    });
    const updateLocation = ()=>{
        setUser({
            ...user,
            location:"USA",
        });
    };
    return(
        <div>
            <p>Name:{user.name}</p>
            <p>Age:{user.age}</p>
            <p>Location:{user.location}</p>
            <button onClick={updateLocation}>Move To USA</button>
        </div>
    )
}
export default UserPro;