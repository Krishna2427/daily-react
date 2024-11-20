// import React from 'react'

// import '../styles/navbar.css';
// const NavBar = () => {
//   return (
//     <header>
//       <nav className='navbar navbar-dark bg-dark'>
//         <div className='container'>
//           <a href="#" className='navbar-brand'>React Data</a>
//           <button
//             className='navbar-toggler'
//             type='button'
//             data-bs-toggle='collapse'
//             data-bs-target='#navbarNav'
//             aria-controls='navbarNav'
//             aria-expanded='false'
//             aria-label='Toggle navigation'
//           >
//             <span className='navbar-toggler-icon'></span>
//           </button>
//           <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
//             <ul className='navbar-nav ms-auto ms-4'>
//               <li className='nav-item' >
//                 <a href="#" className='nav-link'>Home</a>
//               </li>
//               <li className='nav-item'>
//                 <a href="#" className='nav-link'>Charts</a>
//               </li>
//               <li className='nav-item'>
//                 <a href="#" className='nav-link'>Graphs</a>
//               </li>
//               <li className='nav-item'>
//                 <a href="#" className='nav-link'>Tables</a>
//               </li>
//               <li className='nav-item'>
//                 <a href="#" className='nav-link'>Cards Data</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default NavBar

import React, { useState } from 'react'
import '../styles/navbar.css';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
   
  const toggleMenu=()=>{
    setIsOpen(!isOpen);
  }
  return (
    <nav className='navbar'>
        <div className='logo'>MyLogo</div>
        <div className={`nav-links ${isOpen ? 'open':''}`}>
               <a href="#home">Home</a>
               <a href='#about'>About</a>
               <a href="#services">Services</a>
               <a href="#contact">Contact</a>
        </div>
        <button className='navbar-toggler-icon' onClick={toggleMenu}></button>
    </nav>
  )
}

export default NavBar