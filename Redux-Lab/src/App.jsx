import React from 'react';
import { Container } from 'react-bootstrap';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => {
    return (
        <Container className="mt-5">
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
        </Container>
    );
};

export default App;
