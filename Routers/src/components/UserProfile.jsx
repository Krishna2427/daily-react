import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
    const {userId} = useParams();
  return (
    <div>
        <h1>UserProfile</h1>
        <p>Displaying information for user ID: {userId}</p>
    </div>
  )
}

export default UserProfile