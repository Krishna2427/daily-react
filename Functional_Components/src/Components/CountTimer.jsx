import { useState } from "react";

const CountTimer = () => {
  const [startTime, setStartTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [timeDifference, setTimeDifference] = useState(null);

  // start the timer
  const handleStart = () => {
    if (!intervalId) {
      const now = new Date();
      setStartTime(now);
      setCurrentTime(now);
      
      const id = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      setIntervalId(id); // Correctly set the interval ID
    }
  };

  const handleStop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);

      const endTime = new Date();
      const diff = calculateTimeDifference(startTime, endTime);
      setTimeDifference(diff);
    }
  };

  const calculateTimeDifference = (start, end) => {
    const diffInMs = end - start;
    const diffInSeconds = Math.floor(diffInMs / 1000);

    const hours = Math.floor(diffInSeconds / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = diffInSeconds % 60;

    return { hours, minutes, seconds };
  };

  return (
    <div className="text-center mt-3">
      <h1>Start / Stop Timer</h1>
      {startTime && currentTime && (
        <h2>
          Current Time: {currentTime.toLocaleString()}
          <br />
        </h2>
      )}
      <button onClick={handleStart} disabled={!!intervalId}>Start</button>
      <button onClick={handleStop} disabled={!intervalId}>Stop</button>
      {timeDifference && (
        <div>
          <h3>Time Difference</h3>
          <p>
            {timeDifference.hours} hours, {timeDifference.minutes} minutes, {timeDifference.seconds} seconds
          </p>
        </div>
      )}
    </div>
  );
};

export default CountTimer;
