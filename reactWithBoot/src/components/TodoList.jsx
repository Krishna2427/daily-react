import React, { useEffect, useState } from 'react'
import { Button, Container, Form, FormCheck } from 'react-bootstrap'

const TodoList = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleInputChange=(e)=>{
        setTodo(e.target.value);
    }
    const handleSubmit =(e)=>{
           e.preventDefault();
           if(todo.trim()){
            setTodos([...todos, todo]);
            setTodo('');
           }
    }
    // useEffect(()=>{
    //     handleInputChange();
    //     handleSubmit()
    // },[todos])
    console.log(todos)
  return (
    <Container>
        <h2>Todo List</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId='todo'>
                <Form.Label>Add Todo</Form.Label>
                <Form.Control
                     type='text'
                     name= 'todo'
                     value={todo}
                     onChange={handleInputChange}
                     placeholder='add todo'
                     className='form-control'
                />
            </Form.Group>
            <Form.Group controlId='todo'>
                <Form.Label>status</Form.Label>
                <Form.Control
                     type={FormCheck}
                     className='form-control'
                />
            </Form.Group>
            <Button type='submit'>Submit</Button>
        </Form>
    </Container>
  )
}

export default TodoList