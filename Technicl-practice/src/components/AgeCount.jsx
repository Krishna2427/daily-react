import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Last } from 'react-bootstrap/esm/PageItem';

const AgeCount = () => {
    const [dob,setDob] = useState('');
    const [age, setAge] = useState('');

    const handleChange=(e)=>{
        setDob(e.target.value);
    };
    const calculateAge=()=>{
        
        if(!dob){
            return
        }

        const birthDate= new Date(dob);
        const currentDate = new Date();


        // Calculate age in years, months, and days

        let years = currentDate.getFullYear()-birthDate.getFullYear();
        let months = currentDate.getMonth()-birthDate.getMonth();
        let days = currentDate.getDate()- birthDate.getDate();

        if(months < 0){
            years--;
            months += 12;
        }
        if(days < 0){
            months--;
            const lastMoth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
            days += lastMoth.getDate();
        }

        setAge(`${years} years, ${months} months, and ${days} days`);
    }
  return (
    <div>
        <h1>Age Difference Calculator</h1>
       <Form>
           <Form.Group controlId='dob'>
                <Form.Label>Enter Your date Of Birth</Form.Label>
                <Form.Control
                     type='date'
                     value={dob}
                     onChange={handleChange}
                     placeholder='Enter your date of birth'
                />
           </Form.Group>
           <Button onClick={calculateAge}>Calculate Age</Button>
       </Form>
       {age && (
        <div>
            <h2>Your Age:</h2>
            <p>{age}</p>
        </div>
       )}
    </div>
  )
}

export default AgeCount