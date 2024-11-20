import { Component, useState } from 'react'

import './App.css'
import Crud from './Components/Crud'
import Users from './Components/Users'
import MyComponent from './Components/MyComponent'
import ComponentDidMount from './Components/ComDidMount'
import ShouldComponentUpdate from './Components/ShouldCmtUpdate'


class App extends Component {
 render(){
  return(
      <div>
          <Crud/>
          {/* <Users/> */}
          {/* <MyComponent/> */}
          {/* <ComponentDidMount/> */}
          <ShouldComponentUpdate/>
      </div>
  )
 }
}

export default App
