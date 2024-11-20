import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaTrash, FaTrashAlt } from 'react-icons/fa';

const StudentScores = ({students}) => {
    const [marks, setMarks]= useState(students)

    const highScore = marks.filter(std=> std.scores > 70);

    const handleDelete=(list)=>[
         setMarks(highScore.filter(data=> data!== list))
    ]
  return (
    <Container>
          <div>
            <h1>Finding abouve 70 marks</h1>
              <ul>
                 {highScore.map((mark, index)=>(
                    <li key={index}>{mark.name}-{mark.scores}
                    <Button onClick={()=>handleDelete(mark)} variant='danger'><FaTrashAlt/></Button>
                    </li>
                 ))}
              </ul>
          </div>
    </Container>
  )
}

export default StudentScores