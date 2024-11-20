import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const TimeDifferenceCalculator = () => {
  const [startTime, setStartTime] = useState(null);
  const [timeDifference, setTimeDifference] = useState('');
  const [intervalId, setIntervalId] = useState(null);

  const handleStart = () => {
    const currentStartTime = Date.now();
    setStartTime(currentStartTime);
    setTimeDifference('');
    
    // Clear any existing interval to avoid multiple intervals
    if (intervalId) {
      clearInterval(intervalId);
    }
    
    // Start a new interval
    const newIntervalId = setInterval(() => {
      const currentTime = Date.now();
      const differenceInMs = currentTime - currentStartTime;
      
      // Convert milliseconds to hours, minutes, and seconds
      const differenceInSeconds = Math.floor(differenceInMs / 1000);
      const hours = Math.floor(differenceInSeconds / 3600);
      const minutes = Math.floor((differenceInSeconds % 3600) / 60);
      const seconds = differenceInSeconds % 60;
      
      // Update the displayed time difference while the timer is running
      setTimeDifference(`${hours} hours, ${minutes} minutes, and ${seconds} seconds`);
    }, 1000);

    // Store the interval ID to clear it later
    setIntervalId(newIntervalId);
  };

  const handleStop = () => {
    if (intervalId) {
      clearInterval(intervalId); // Clear the interval
      setIntervalId(null); // Reset the interval ID

    //   // Calculate final time difference and set it once the timer is stopped
    //   const currentTime = Date.now();
    //   const differenceInMs = currentTime - startTime;
    //   const differenceInSeconds = Math.floor(differenceInMs / 1000);
    //   const hours = Math.floor(differenceInSeconds / 3600);
    //   const minutes = Math.floor((differenceInSeconds % 3600) / 60);
    //   const seconds = differenceInSeconds % 60;

    //   setTimeDifference(`${hours} hours, ${minutes} minutes, and ${seconds} seconds`);

    
    }
  };

  // Clean up interval on component unmount
  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <div>
      <h1>Time Difference Calculator</h1>
      <Button onClick={handleStart} style={{ marginRight: '10px' }}>Start</Button>
      <Button onClick={handleStop}>Stop</Button>
      {timeDifference && (
        <div>
          <h2>Elapsed Time:</h2>
          <p>{timeDifference}</p>
        </div>
      )}
    </div>
  );
};

export default TimeDifferenceCalculator;
