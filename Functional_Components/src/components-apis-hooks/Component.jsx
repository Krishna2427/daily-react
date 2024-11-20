import React, { createContext, useContext, useState } from 'react'

const CountContext = createContext();
const Component = () => {
     const [count, setCount] = useState(10);
     const clickHandle = () => {
          setCount(count + 1);
     }
     return (
          <CountContext.Provider value={count}>
               <div className="row">
                    <div className="col">
                         <h1>useContext Hook</h1>
                         <p>Count:{count}</p>
                         <button onClick={clickHandle}>INC</button>
                         <Component1 />
                    </div>
               </div>
          </CountContext.Provider>
     )
}

const Component1 = () => {
     return (
          <div className="row container">
               <div className="col">
                    <h3>Component 1</h3>
                    <Component2 />
               </div>
          </div>
     )
}
const Component2 = ({ count }) => {
     return (
          <div className="row container">
               <div className="col">
                    <h3>Component 2</h3>
                    <Component3 />
               </div>
          </div>
     )
}
const Component3 = ({ count }) => {
     return (
          <div className="row container">
               <div className="col">
                    <h3>Component 4</h3>
                    <Component4 />
               </div>
          </div>
     )
}
const Component4 = () => {
     const count = useContext(CountContext)
     return (
          <div className="row">
               <div className="col">
                    <h3>Component 4</h3>
                    <p>finally:{count}</p>
               </div>
          </div>
     )
}
export default Component