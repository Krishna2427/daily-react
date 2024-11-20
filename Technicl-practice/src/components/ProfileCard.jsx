import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'

const ProfileCard = ({name, description}) => {
  return (
    <Container>
       <Card style={{width:'18rem'}} className='mx-auto mt-5'>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
       </Card>
    </Container>
  )
}

export default ProfileCard