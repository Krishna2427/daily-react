import React, { useReducer } from 'react';

// Reducer function for multiple counters
function multiCounterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state.map(counter =>
        counter.id === action.id ? { ...counter, count: counter.count + 1 } : counter
      );
    case 'decrement':
      return state.map(counter =>
        counter.id === action.id ? { ...counter,count: Math.max(0, counter.count - 1)} : counter
      );
    default:
      return state;
  }
}

const MultipleCounters = () => {
  const initialState = [
    { id: 1, count: 0 },
    { id: 2, count: 0 },
  ];
  
  const [state, dispatch] = useReducer(multiCounterReducer, initialState);

  return (
    <div>
      {state.map(counter => (
        <div key={counter.id}>
          <h3>Counter {counter.id}: {counter.count}</h3>
          <button onClick={() => dispatch({ type: 'increment', id: counter.id })}>+</button>
          <button onClick={() => dispatch({ type: 'decrement', id: counter.id })}>-</button>
        </div>
      ))}
    </div>
  );
};

export default MultipleCounters;
