import React from 'react'
import { Container, Button } from 'react-bootstrap'

const Child = ({sendMessage}) => {
    const handleClick=()=>{
        sendMessage('Hello from child component')
    }
  return (
   <Container>
       <h2>Child Component</h2>
        <Button onClick={handleClick}>Send Message to parent</Button>
   </Container>
  )
}

export default Child