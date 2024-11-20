import React from 'react'
import { Link, Outlet, Router, Route, Routes } from 'react-router-dom'
import Overview from './Overview'
import Settings from './Settings'
import Profile from './Profile'

const DashBord = () => {
  return (
    <div>
        <h2>DashBord</h2>
        <nav>
            <Link to={'overview'}>Overview</Link> 
            <Link to={'settings'}>Settings</Link> 
            <Link to={'profile'}>Profile</Link>
        </nav>

        <Outlet/>

        <Routes>
            <Route path='overview' element={<Overview/>}/> |{" "}
            <Route path='settings' element={<Settings/>}/> |{" "}
            <Route path='profile' element={<Profile/>}/>
        </Routes>
    </div>
  )
}

export default DashBord