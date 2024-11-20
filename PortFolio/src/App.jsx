import { useState } from 'react'

import './App.css'
import Navbar from './Components/NavBar'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import AnimationExample from './Components/AnimationExample'
import TransformExample from './Components/TransormsExample'
import Transition from './Components/Transition2'
import MyForm from './Components/MyForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
         <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Contact/> 
         <MyForm/> 
    </div>
  )
}

export default App
