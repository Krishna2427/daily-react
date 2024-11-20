import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OfCanvas from './components/OfCanvas'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <OfCanvas/> */}
      <TodoList/>
    </div>
  )
}

export default App
