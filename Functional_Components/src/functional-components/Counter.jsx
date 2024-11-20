const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState); // Use useReducer to manage state
    
    return (
      <div>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button> {/* Change button text to 'Decrement' */}
      </div>
    );
  };
  
  export default Counter;