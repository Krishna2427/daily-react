import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { FaMoon, FaSun } from 'react-icons/fa'

import '../styles/darkmode.css';
const ToggleTheme = ({dark, setTheme}) => {
    
    const ToggleTheme=()=>{
        setTheme((prevState)=> !prevState)
    }
  return (
    <Container>
        <Button onClick={ToggleTheme} variant='outline-secondary float-left'>
            {dark ? <FaSun className='sun'/> : <FaMoon/>}
        </Button>
    </Container>
  )
}

export default ToggleTheme