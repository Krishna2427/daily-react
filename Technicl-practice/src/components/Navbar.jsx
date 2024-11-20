import React from 'react'
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>My website</h1>
        <ul className='nav-link'>
             <li>Home</li>
             <li>About</li>
             <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar