import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask =(e)=>{
        e.preventDefault()
        if(newTask.trim()){
            setTasks([...tasks, newTask]);
            setNewTask('')
        }
    }

    const deleteItem =(deleteItem)=>{
        setTasks(tasks.filter(task=> task !== deleteItem));
    }
  return (
    <Container>
          <h1>Todo List</h1>
          <input type="text"  name='addTask' 
          value={newTask}
                onChange={(e)=>setNewTask(e.target.value)}
          />
         <Button onClick={addTask}>Add Task</Button>
        <ul>
            {tasks.map((task,id)=>(
                <li key={id}>
                {task}
                <Button onClick={()=>deleteItem(task)}>Delete</Button>
             </li>
            ))}
        </ul>
    </Container>
  )
}

export default TodoList