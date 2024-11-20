import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

const AddTodo = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            dispatch(addTodo(inputValue)); // Dispatch the addTodo action
            setInputValue('');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="todoInput">
                <Form.Control 
                    type="text" 
                    placeholder="Add a new todo" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                />
            </Form.Group>
            <Button variant="primary" type="submit">Add Todo</Button>
        </Form>
    );
};

export default AddTodo;
