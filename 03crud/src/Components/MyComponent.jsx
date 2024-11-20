import { Component } from "react";

class MyComponent extends Component{
    constructor(props){
       super(props);
       this.state = {
           count:0,
           userData: null
       }
       this.handleClick = this.handleClick.bind(this);
    }
    handleClick = ()=>{
        this.setState({count:this.state.count+1});
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Increment</button>
                <p>Count:{this.state.count}</p> 
            </div>
        )
    }
}
export default MyComponent