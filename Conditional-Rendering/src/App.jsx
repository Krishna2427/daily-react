import React from 'react'
import { useState } from 'react'
import Messages from './components/Messages';
import StatusMessage from './components/StatusMessage';
import DataLoader from './components/DataLoader';
import FormValidations from './components/FormValidations';
import ThemeToggle from './components/ThemeToggle';

function App() {
  
  const [isAdmin, setAdmin] = useState(false)
  const [hasMessages, setMessages] = useState(false);

  const [status, setStatus] = useState('loading');

  const [loginUser, setLoginUser] = useState(false);

  return (
    <div>

        {/* <button onClick={()=>setAdmin(!isAdmin)}>Toggle Admin</button>
        <h1 style={{color:isAdmin ? 'red':'black'}}>
        {isAdmin ? 'Admin Dash Bord':'User DashBord'}
        </h1>


        <button onClick={()=>setMessages(!hasMessages)}>Toggle Messages</button>
        <Messages hasMessages = {hasMessages}/>

        <button onClick={()=>setStatus('success')}>setSuccess</button>
        <button onClick={()=>setStatus('error')}>setStatus</button>
        <StatusMessage status ={status}/>

        <button onClick={()=> setLoginUser(!loginUser)}>
          {loginUser ? 'logout':'login'}
        </button>
        {loginUser ? (
           <h1 style={{color:'green'}}> Welcome User </h1>
        ):(
          <h1 style={{color:'red'}}>Please log in to continue</h1>
        )}
        <DataLoader/>
        <FormValidations/> */}
        <ThemeToggle/>
    </div>
  )
}

export default App