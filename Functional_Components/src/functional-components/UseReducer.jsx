import React, { useReducer } from 'react'

// function reduce(state, action){
//      switch(action.type){
//        case 'incement':
//            return {count: state.count + 1}
//        case 'decrement':
//            return {count: state.count -1}
//        default:
//           throw new Error();
//      }
// }

function reduce(state, action){
  switch(action.type){
    case 'increment':
        return {count: state.count + 1}
    case 'decrement':
        return {count: state.count -1}
    default:
       throw state;
  }
}

const UseReducer = () => {
  const intitialState = {count:0};

  const [state, dispatch] = useReducer(reduce, intitialState);
  return (
    <div>
      <h3>count:{state.count}</h3>
      <button onClick={()=> dispatch({type:'increment'})}>+</button>
      <button onClick={()=> dispatch({type:'decrement'})}>-</button>
    </div>
  )
}

export default UseReducer