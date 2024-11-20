import React from "react";

const AnimationExample = () => {
    return (
        <div className="flex space-x-4 justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>

            <div className="relative">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></div>
                <div className="relative inline-flex rounded-full h-10 w-10 bg-purple-500"></div>
            </div>
            <div className="animate-pulse bg-green-400 text-white font-bold py-2 px-2 rounded-full">Pulse</div>
            <div className="animate-bounce bg-yellow-400 text-white font-bold py-2 px-2 rounded">Bounce</div>
        </div>
    );
};

export default AnimationExample;
