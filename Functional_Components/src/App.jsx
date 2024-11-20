import React from 'react'
import Posts from './functional-components/Posts'
import Card from './functional-components/Card'
import Albums from './functional-components/Card'
import AlbulCard from './functional-components/AlbulCard'
import AllApis from './components-apis-hooks/AllApis'
import Todos from './components-apis-hooks/UserReducer'
import CrudWithReduc from './components-apis-hooks/CrudWithReduce'
import UseReducer from './functional-components/UseReducer'
import Counter from './components-apis-hooks/Counter'
import MultipleCounters from './components-apis-hooks/MultipleCounters'
import UseContext from './components-apis-hooks/Component'
import Component from './components-apis-hooks/Component'

function App() {
  return (
    <div>
       {/* <Posts/> */}
       {/* <Albums/> */}
       {/* <AlbulCard/> */}
       {/* <AllApis/> */}
       {/* <Todos/> */}
       {/* <CrudWithReduc/> */}
       {/* <UseReducer/> */}
       {/* <Counter/>
       <MultipleCounters/> */}
       <Component/>
    </div>
  )
}

export default App