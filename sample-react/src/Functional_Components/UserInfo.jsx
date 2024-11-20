import React, { useState } from 'react';

function UserInfo() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(Number(e.target.value));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
            />
            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={handleAgeChange}
            />
            <h1>
                User Info: {name}, Age: {age}
            </h1>
        </div>
    );
}

export default UserInfo;
