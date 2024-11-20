import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const[isRunning, setIsRunning] = useState(false);

    useEffect(()=>{
        let timer;
        if(isRunning){
            timer = setInterval(()=>{
                 setTime(prevTime => prevTime + 1)
            }, 1000);
        }else{
            clearInterval(timer);
        }

        return ()=> clearInterval(timer);
    },[isRunning]);

    const handleReset =()=>{
        setTime(0);
        setIsRunning(false);
    }
    const formatTime =(time)=>{
        const hourse= Math.floor(time/3600);
        const minutes = Math.floor((time % 3600) / 60)
        const seconds = time % 60;

        return `${ hourse < 10 ? '0' + hourse:hourse}: ${minutes < 10 ? '0' + minutes:minutes}: 
        ${seconds < 10 ? '0' + seconds:seconds}`;
    }

    const handleStartStop=()=>{
        setIsRunning(prevState=> !prevState)
    }
  return (
    <div style={{textAlign:'center', marginTop:'20px'}}>
        <h1>StopWatch</h1>
        <div>
            {formatTime(time)}
        </div>
        <Button
          onClick={handleStartStop}
        >
        {isRunning ? 'Stop':'Start'}
        </Button>
        <Button
        onClick={handleReset}
        >
          Reset
        </Button>
    </div>
  )
}

export default StopWatch