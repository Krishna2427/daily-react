import { Component } from "react";

class Timer extends Component{
    constructor(props){
        super(props)
        this.state={
            time:0,
        }
    }
    componentDidMount(){
        this.timerId= setInterval(()=>{
            this.setState({time:this.state.time + 1});
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    render(){
        return(
            <h1>Time: {this.state.time}</h1>
        )
    }
}
export default Timer;