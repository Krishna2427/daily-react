import { useState } from "react";

function Transition() {
    const [hovered, setHoverd] = useState(false);
    return (
        <div className="flex justify-center items-center h-screen space-x-4">
            <div onMouseEnter={() => setHoverd(true)}
                onMouseLeave={() => setHoverd(false)}
                className={`transition transform ${hovered ? "scale-125" : "scale-100"} duration-500 bg-blue-400 p-5 rounded-lg`}>
                Hover to scale
            </div>
            <div className="transition-transform duration-500 ease-in-out transform hover:rotate-45 bg-green-400 p-5 rounded-lg">
                hover to rotate
            </div>
            <div
                className="transition-opacity duration-500 ease-out opacity-0 hover:opacity-100 bg-purple-500  p-5 rounded-lg"
            >
                Hover to Fade In
            </div>
        </div>
    )
}
export default Transition;