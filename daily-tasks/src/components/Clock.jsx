import { Component } from "react";

class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: new Date(),
        }
    }
    componentDidMount(){
        this.timerId = setInterval(
            ()=> this.tick(), 1000
        );
    }
    componentWillUnmount(){
       clearInterval(this.timerId);
    }
    tick(){
        this.setState({
            date:new Date()
        })
    }
    render(){
        return(
            <div>
                <h1>Hello, World</h1>
                <h2>It is {this.state.data.toLocaleDateString()}</h2>
            </div>
        )
    }
}
export default Clock;