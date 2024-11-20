import React, { useState, useEffect } from 'react';

// Array of colors to cycle through

const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0E68C', '#FF6347'];
const ColorChanger = () => {
  const [color, setColor] = useState(colors[0]); // Initial color

  useEffect(() => {
    
    const colorChangeInterval = setInterval(() => {
      // Change color every 5 seconds
      setColor((prevColor) => {
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup the interval on unmount
    return () => clearInterval(colorChangeInterval);
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-color 1s ease', // Smooth transition between colors
      }}
    >
      <h1 style={{ color: '#fff' }}>Background Color Changer</h1>
    </div>
  );
};

export default ColorChanger;
