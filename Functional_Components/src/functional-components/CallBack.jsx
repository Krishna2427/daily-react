import { useCallback, useMemo, useState } from "react"

const CallBack1=()=>{
   const [count, setCount] =useState(0);
   const [tasks, setTasks] = useState([]);
   const increment = ()=> setCount((c)=> c + 1);
//    const calculations = calc(count);
const calculations =useMemo(()=> calc(count),[count]);
   const addTask = useCallback(()=>{
    setTasks((t)=>[...t, "new Task"]);

   }, [tasks]);
   return(
    <div>
        <h1>Memo Hook</h1>
        <p>Value{count}</p>
        <button onClick={increment}>INC</button>
        <h2>Exspensive Calculations</h2>
        {calculations}
        {tasks.map((task, index)=>{
            return <p key={index}>{task}</p>
        })}
        <button onClick={addTask}>Add Task</button>
    </div>
   )
}

export default CallBack1;


const calc = (num)=>{
    console.log("calling calc");
    for(let i = 0; i < 25000; i++){
        num += 1;
    }
    return num;
};