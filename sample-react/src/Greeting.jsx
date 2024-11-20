function Greeting(props){
      return(
        <div>
            <h2>This is the Child Component</h2>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <button onClick={props.onButtonClick}>Click me</button>
        </div>
      )
}
export default Greeting;