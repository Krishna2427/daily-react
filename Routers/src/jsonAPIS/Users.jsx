import React, { useEffect, useState } from 'react'

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const handleUsers =async()=>{
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
    }
  })
  return (
    <div>Users</div>
  )
}

export default Users