import React, { useEffect, useState } from 'react'

function Body({postData}) {
    const[posts, setPosts] = useState([]);
    useEffect(()=>{
       setPosts(postData);
    }, [postData])
    console.log(posts)
  return (
    <>
    {/* <p>{posts}</p> */}
      {posts.length > 0 ? (
        posts.map((pot, index)=>(
            <tr key={index}>
                <td>{pot}</td>
            </tr>
        ))
      ) : (
        <tr>
            <td>"No post Available"</td>
        </tr>
      )}
    </>
  )
}

export default Body