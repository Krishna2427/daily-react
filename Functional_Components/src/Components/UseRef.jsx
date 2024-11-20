
// // import React, { useRef, useState } from 'react'

// // function UseRef() {
// //     const [count, setCout] = useState(0);
// //     const timeRef = useRef(null);
// //     const startTime = ()=>{
// //         if(!timeRef.current){
// //             timeRef.current = setInterval(()=>{
// //                 setCout((prevCount)=> prevCount + 1);
// //             }, 1000);
// //         }
// //     }
// //     const stopTime=()=>{
// //         timeRef.current = clearInterval(timeRef.current);
// //         timeRef.current = null;
// //     }
// //   return (
// //     <div>
// //         <h1>UseRef</h1>
// //         <h2>Count:{count}</h2>
// //         <button onClick={startTime}>Start</button>
// //         <button onClick={stopTime}>Stop</button>
// //     </div>
// //   )
// // }

// // export default UseRef

// import React, { useRef, useState } from 'react'

// function UseRef() {
//     const [count, setCount] = useState(0);
//     const rendersRef = useRef(0);
//     rendersRef.current += 1; 
//   return (
//     <div>
//         <h1>count:{count}</h1>
//         <h2>Redering:{rendersRef.current}</h2>
//         <button className='bg-primary rounded-3' onClick={()=> setCount(count + 1)}>increment Count</button>
//     </div>
//   )
// }

// export default UseRef

import React, { useRef, useState } from 'react';

function UseRef() {
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Refs for form inputs
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const addUser = () => {
    const newUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    setUsers([...users, newUser]);

    // Clear input fields
    nameRef.current.value = '';
    emailRef.current.value = '';
  };

  const deleteUser = (index) => {
    const filteredUsers = users.filter((_, i) => i !== index);
    setUsers(filteredUsers);
  };

  const editUser = (index) => {
    const userToEdit = users[index];
    nameRef.current.value = userToEdit.name;
    emailRef.current.value = userToEdit.email;
    setIsEditing(true);
    setCurrentIndex(index);
  };

  // Updating a user
  const updateUser = () => {
    const updatedUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    const updatedUsers = users.map((user, index) =>
      index === currentIndex ? updatedUser : user
    );
    setUsers(updatedUsers);
    setIsEditing(false);
    setCurrentIndex(null);

    // Clear input fields
    nameRef.current.value = '';
    emailRef.current.value = '';
  };

  return (
    <div>
      <h1>CRUD Example with useRef</h1>
      <div>
        <input type="text" placeholder="Name" ref={nameRef} />
        <input type="email" placeholder="Email" ref={emailRef} />
        {isEditing ? (
          <button onClick={updateUser}>Update</button>
        ) : (
          <button onClick={addUser}>Add User</button>
        )}
      </div>

      {users.map((user, index) => (
        <ul key={index}>
          <li>
            <span>
              {user.name} - {user.email}
            </span>
            <button onClick={() => editUser(index)}>Edit</button>
            <button onClick={() => deleteUser(index)}>Delete</button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default UseRef;
