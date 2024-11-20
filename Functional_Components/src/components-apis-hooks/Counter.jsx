import React, { useReducer } from 'react';

function reduce(state, action) {
    switch(action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            if(state.count > 0) {
                return { count: state.count - 1 };
            }
            // Return the current state object if count is already 0
            return state;
        default:
            throw new Error('Unknown action');
    }
}

const Counter = () => {
    const initialState = { count: 0 };

    const [state, dispatch] = useReducer(reduce, initialState);
  
    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
};

export default Counter;
