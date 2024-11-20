import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const AppNavBar = () => {
  return (
    <Navbar>
        <Container>
            <Navbar.Brand href='#'>MyApp</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#about'>About</Nav.Link>
                    <Nav.Link href='#contact'>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default AppNavBar