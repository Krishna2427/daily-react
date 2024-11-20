import React, { useEffect, useState } from 'react'
import {getAllUsers} from '../services/userSerices'


const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const fetchUsers = async()=>{
            try{
                const data = await getAllUsers();
                setUsers(data);
            }catch(err){
                console.error('Failed to fetch  users', err);
            }
        };
        fetchUsers()
    }, [])
  return (
    <div>
        <h1>User List</h1>
        <ul>
            {users.map((user, index)=>(
                <li key={index}>
                  {user.name} - {user.email}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default UserList