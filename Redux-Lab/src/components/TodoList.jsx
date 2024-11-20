import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, ListGroup } from 'react-bootstrap';
import { removeTodo } from './AddTodo'; // Ensure this import is correct

const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos); // Accessing todos from the state
    const dispatch = useDispatch();

    return (
        <ListGroup>
            {todos.map((todo, index) => (
                <ListGroup.Item key={index}>
                    {todo} 
                    <Button variant="danger" onClick={() => dispatch(removeTodo(index))} className="float-end">Remove</Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default TodoList;
