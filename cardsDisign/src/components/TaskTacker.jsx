import { useState } from "react"

const TaskTacker=()=>{
    
    const [task, setTask] = useState([])
    const [newTask, setNewTask] = useState("");
   const addTask=()=>{
         setTask((prevTasks)=>{
             const updatedTask = [...prevTasks, {text:newTask, completed:false}]
             console.log(updatedTask);
             return updatedTask
         }) 
         setNewTask('')
    }
    return(
        <div>
            <input type="text" 
            name="task"
            value={newTask}
            onChange={(e)=> setNewTask(e.target.value)}
            />
            <button onClick={addTask}>add Task</button>
            <ul>
                {task.map((tasks, index)=>(
                    <li key={index}>{tasks.text}</li>
                ))}
            </ul>
        </div>
    )
}
export default TaskTacker;