import { useState } from "react";

function Toggle(){
    const [isOn, setIsOn] = useState(false);

    return(
        <div>
            <p>The light is {isOn ? 'ON':'OFF'}</p>
            <button onClick={()=>setIsOn(!isOn)}>Toggle Light</button>
        </div>
    )
}
export default Toggle;