import React, { useState } from 'react'


function ThemeToggle() {
    const [isDark,setIsDark] = useState(false);

  return (
    <div style={{backgroundColor:isDark ? 'black':'white', color:isDark ? 'white':'black',height:'100vh'}} className='darkmode' >
        <h1>ThemeToggle</h1>  
        <button onClick={()=> setIsDark(!isDark)}>
           {isDark ? 'Switch to Light':'Switch to Dark'}
        </button>  
       <h1> {isDark ? ' Dark mode':'light mode'}</h1>
    </div>
  )
}

export default ThemeToggle