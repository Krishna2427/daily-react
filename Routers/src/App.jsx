// import React from 'react'
// import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// import Home from './jsonAPIS/Home';

// import Comments from './jsonAPIS/Comments';
// import Posts from './jsonAPIS/Posts';
// import Photos from './jsonAPIS/Photos';
// import Todos from './jsonAPIS/Todos';
// import Users from './jsonAPIS/Users';
// import Album from './jsonAPIS/album';



// const App = () => {
//   return (
//     <Router>
//       <div className="containaer">
//         <div className="row">
//           <div className="col">
//             <h1>Sample Routing App</h1>
//           </div>
//         </div>
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//           <div className="container-fluid">
//             <Link className="navbar-brand" to={"/"} >APIs</Link>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/posts"}>Posts</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/comments"}>Comments</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/album"}>Album</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/photos"}>Photos</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/dotos"}>Todos</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/users"}>Users</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//         <div>
//           <div className="row">
//             <div className="col">
//               <Routes>
//                 <Route path='/' element={<Home />}></Route>
//                 <Route path='/posts' element={<Posts />}></Route>
//                 <Route path='/comments' element={<Comments />}></Route>
//                 <Route path='/album' element={<Album />}></Route>
//                 <Route path='/photos' element={<Photos />}></Route>
//                 <Route path='/todos' element={<Todos />}></Route>
//                 <Route path='/users' element={<Users />}></Route>
//               </Routes>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Router>
//   )
// }

// export default App


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Correct import here
// import Contact from './components/Contact';
// import Home from './components/Home';
// import Comments from './components/Comments';
// import UserProfile from './components/UserProfile';
// import ProductDetails from './components/ProductDetails';
// import './styles/styles.css';

// const App = () => {
//   return (
//     <Router>
//       <nav className='nav-bar m-auto'>
//         <Link to="/">Home</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/comments">Comments</Link>
//         <Link to= '/users/:userId'>User Deatails</Link>
//         <Link to= '/product/:productDetails'>Product Deatails</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/comments" element={<Comments />} />

//         <Route path='/users/:userId' element={<UserProfile/>}/>
//         <Route path='/product/:productDetails' element={<ProductDetails/>}/>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Emoh from './Emoh'
import DashBord from './components/DashBord'

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Emoh/>}></Route>
            <Route path='dashboard/*' element={<DashBord/>}></Route>
        </Routes>
    </Router>
  )
}

export default App
