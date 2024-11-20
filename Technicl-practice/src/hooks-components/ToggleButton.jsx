import React, { useState } from 'react';

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleButton = () => {
        setIsOn(prevState => !prevState);
    };

    return (
        <button onClick={toggleButton}>
            {isOn ? "ON" : "OFF"}
        </button>
    );
};

export default ToggleButton;
