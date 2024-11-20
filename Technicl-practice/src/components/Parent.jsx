import { Component } from "react";
import { Container } from "react-bootstrap";
import Child from "./Child";

class Parent extends Component{
      recieveMessage=(Message)=>{
           alert(Message);
      }
      render(){
        return(
            <Container>
               <Child sendMessage={this.recieveMessage}/>
            </Container>
        )
      }
}
export default Parent;