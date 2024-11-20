import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
        <ul>
            <li><Link to='/'>DashBord</Link></li>
            <li><Link to='/form1'>Form 1</Link></li>
            <li><Link to='/form2'>Form 2</Link></li>
            <li><Link to='/lists'>Lists</Link></li>
        </ul>
    </nav>
  )
}

export default Nav;