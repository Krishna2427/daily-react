import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ToggleTheme from './ToggleTheme';
import { Navbar, Nav } from 'react-bootstrap';
const Dark_Light = ({ dark, setTheme }) => {

    return (
        <Navbar bg={dark ? 'dark' : 'light'} variant={dark ? 'dark' : 'light'}>
            <Container>
                <Navbar.Brand>Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link >Features</Nav.Link>
                    <Nav.Link>Pricing</Nav.Link>
                    <div className='mr-2'>
                        <ToggleTheme dark={dark} setTheme={setTheme} />
                    </div>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Dark_Light