import React, { memo } from 'react'

function Tast({tasks, addTask}) {
    console.log("Task: I am also rendering...");
    
  return (
    <div>
        <h2>Task Component</h2>
        {tasks.map((task, index)=>{
            return <p key={index}>{task}</p>;
        })}
        <button onClick={addTask}>Add task</button>
    </div>
  )
}

export default memo(Tast)