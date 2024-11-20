import { useState } from 'react'
import './App.css'
import Card from './components/Card';
import Users from './components/Users';
import Todos from './components/Todos';
import TaskTacker from './components/TaskTacker';

function App() {
  return (
     <div>
        {/* <Users/>
        <Todos/> */}
        <TaskTacker/>
     </div>
  )
}

export default App
