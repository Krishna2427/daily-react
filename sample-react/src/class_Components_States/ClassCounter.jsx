import { Component } from "react";

class ClassCounter extends Component{
    constructor(props){
        super(props);
        this.state= {
            count:0,
        }
    }
    increment = ()=>{
       this.setState({count:this.state.count + 1})
    }
    render(){
        return(
            <div>
                <h1>Class Component with States</h1>
                <h1>counter:{this.state.count}</h1>
                <button onClick={this.increment} className="bg-blue-400">here</button>
            </div>
        )
    }
}
export default ClassCounter;