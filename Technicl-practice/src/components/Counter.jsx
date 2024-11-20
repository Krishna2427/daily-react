import React, { Component } from 'react'
import { Button, Container } from 'react-bootstrap';

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
        }
    }
    increment =()=>{
        this.setState({count:this.state.count+1});
    }
    decrement=()=>{
       if(this.state.count > 0){
        this.setState({count:this.state.count - 1});
       }
    }
    render(){
        return(
            //  <div>
            //     <h1>Counter{this.state.count}</h1>
            //     {/* <button onClick={this.increment}>increment</button>
            //     <button onClick={this.decrement}>Decrement</button> */}

            //  </div>
            <Container>
                <h1>Counter, {this.state.count}</h1>
                <Button onClick={this.increment}>increment</Button>
                <Button onClick={this.decrement} className='ms-2' variant='danger'>decrement</Button>
            </Container>
        )
    }
}

export default Counter