import React, { useState } from 'react';

const UserGreeting = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Toggle login status
    const toggleLogin = () => {
        setIsLoggedIn(prevState => !prevState);
    };

    return (
        <div>
            <h1>
                {isLoggedIn ? "Welcome back!" : "Please sign in"}
            </h1>
            <button onClick={toggleLogin}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </div>
    );
};

export default UserGreeting;
