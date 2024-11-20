import React, { Component } from 'react'
import { Button, Container } from 'react-bootstrap';

class WelcomeMessage extends Component{
         state={
            isLoginIn:false
        };
    toggleLogin=()=>{
           this.setState(prevState=>({isLoginIn: !prevState.isLoginIn})) 
    }
    render(){

        const {isLoginIn} = this.state;

        return(
           <Container>
                {isLoginIn ? (
                    <h2>Welcome back, User</h2>
                ): (
                    <h2>Please log in to continue</h2>
                )}
                <Button onClick={this.toggleLogin}>
                    {isLoginIn ? 'Logout' : 'Login'}
                </Button>
           </Container>
        )
    }
}

export default WelcomeMessage