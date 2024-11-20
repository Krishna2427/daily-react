import React, { useState } from 'react'

function DragDrop() {
    const [overDrag, setOverDrag] = useState(false);
    
  return (
    <div>
        <div>Drag me</div>
        <div 
        style={{marginTop:'20px', height:'100px', width:'100px'}}>Drop here</div>
    </div>
  )
}

export default DragDrop