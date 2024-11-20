import React, { useEffect, useState } from 'react'

const Comments = () => {
  const [comments, setCommemts] = useState([]);

  useEffect(()=>{
    const handleComments =async ()=>{
         const res = await fetch('https://jsonplaceholder.typicode.com/comments');
         const data = await res.json();
         setCommemts(data);
    }
    handleComments();
  }, [])

  
  return (
    <div>
      <h1>Comments</h1>
        <div>
            
        </div>
    </div>
  )
}

export default Comments