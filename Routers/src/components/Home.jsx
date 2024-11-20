import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
  const users = [1, 2, 3];
  return (
    <div>
      <h2>Home page</h2>
      <h2>User List</h2>
      <ul>
          {users.map(userId=>(
            <li key={userId}>
                 <Link to={`/users/${userId}`}>User {userId}</Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
export default Home;
