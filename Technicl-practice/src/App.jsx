// import React, { useEffect } from 'react'
// import Greetings from './components/Greetings'
// import Counter from './components/Counter'
// import Parent from './components/Parent'
// import Timer from './components/Timer'
// import FCounter from './components/FCounter'
// import ProfileCard from './components/ProfileCard'
// import { Container, ToggleButton } from 'react-bootstrap'
// import AppNavBar from './components/AppNavBar'
// import LoginForm from './components/LoginForm'
// import RegistrationForm from './components/RegistrationForm'
// import WelcomeMessage from './components/WelcomeMessage'
// import UseMemo from './hooks-components/UseMemo'
// import FocusInput from './FocusInput'
// import Dark_Light from './hooks-components/Dark_Light'
// import { useState } from 'react'
// import './styles/darkmode.css'
// import TodoList from './hooks-components/TodoList'
// import ContactList from './hooks-components/ContactList'
// import StudentScores from './hooks-components/StudentScores'
// const App = () => {
//   const [dark, setDark] = useState(false);
  
//   useEffect(()=>{
//       if(dark){
//         document.body.classList.add('dark')
//       }else{
//         document.body.classList.remove('dark')
//       }
//   })

//   const constList = [
//     {
//      id:1,
//      name:'Mahesh',
//      mobileNo:123
//     },
//     {
//      id:2,
//      name:'Krishna',
//      mobileNo:123
//     },
//     {
//     id:3,
//      name:'Venkat',
//      mobileNo:123
//     }
//   ]
//   const studentScores = [
//     {
//       name:"mahesh",
//       scores:100
//     },
//     {
//       name:"krishna",
//       scores:49
//     },
//     {
//       name:"venkat",
//       scores:90
//     },
//     {
//       name:"sai",
//       scores:60,
//     }
//   ]
//   return (
//     <Container>
//         <Dark_Light dark={dark} setTheme={setDark}/>
//         <h1>Hello, {dark ? 'Dark' : 'Light'} Mode!</h1>
//          <p>This is an example of a page with dark and light mode.</p>
//          <TodoList/>
//          {/* <Greetings/> */}
//         <ToggleButton/>
//         <ContactList data={constList}/>
//         <StudentScores students={studentScores}/>
//     </Container>
//   )
// }

// export default App;
// import React from 'react'
// import Navbar from './components/Navbar'
// import Body from './components/Body'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <div className="App">
//          <Navbar/>
//          <Body/>
//          <Footer/>
//     </div>
//   )
// }

// export default App

import React from 'react'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignInForm'
import StopWatch from './components/StopWatch'
import ColorChange from './components/ColorChange'
import TimeDifferenceCalculator from './components/TimeDifferenceCalculator'
import AgeCount from './components/AgeCount'

const App = () => {
  return (
    <div>
       {/* <LoginForm/> */}
       {/* <SignUpForm/> */}
       {/* <StopWatch/> */}
       {/* <ColorChange/> */}
       <TimeDifferenceCalculator/>
       <AgeCount/>
    </div>
  )
}

export default App