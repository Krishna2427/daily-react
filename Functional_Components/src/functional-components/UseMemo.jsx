import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [serchTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState([
        {id:1, name:"Krishna"},
        {id:2, name:"Venkat"},
        {id:3, name:"Prasad"}
    ]);

    const fulteredUser =useMemo(()=>{
        console.log("Filtered users...");
        return users.filter((user)=>
          user.name.toLocaleLowerCase().includes(serchTerm.toLowerCase())
        );
    },[users, serchTerm]);
  return (
    <div>
        <h1>Use Memo Example:</h1>
        <input type="text" 
        placeholder='Search users....'
        value={serchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}
        />
        <ul>
            {fulteredUser.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default UseMemo