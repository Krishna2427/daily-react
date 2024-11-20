import Button from "./components/Button"
import Counter from "./components/Counter"

const App=()=>{
  return(
    <div>
      <h1>My App</h1>
      <Button label='click me' onClick={()=>alert("Button clicked")}/>
      <Counter/>  
    </div>
  )
}
export default App