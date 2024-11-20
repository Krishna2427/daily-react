import React, { useEffect, useRef, useState } from 'react';

function CrudK() {
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const nameRef = useRef(null);

  const addUser = () => {
    const newUser = {
      name: nameRef.current.value,
    };
    setUsers([...users, newUser]); // Add new user to users array
    nameRef.current.value = ''; // Clear input field
  };

  useEffect(() => {
    console.log(users); // Log users whenever the users state updates
  }, [users]);

  const updateUser = () => {
    const updatedUser = {
      name: nameRef.current.value,
    };
    const updatedUsers = users.map((user, index) =>
      index === currentIndex ? updatedUser : user // Correctly replace the user being edited
    );
    setUsers(updatedUsers);
    setIsEditing(false);
    setCurrentIndex(null);

    nameRef.current.value = ''; // Clear input field after update
  };

  const editUser = (index) => {
    const userToEdit = users[index];
    nameRef.current.value = userToEdit.name;
    setIsEditing(true);
    setCurrentIndex(index); // Fix: set index instead of false
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index); // Filter out the user at the specified index
    setUsers(updatedUsers);
    nameRef.current.value = '';
  };

  return (
    <div>
      <h1>CrudK performing only one input</h1>
      <div>
        <input
          type="text"
          placeholder="Enter name"
          ref={nameRef}
        />
        {isEditing ? (
          <button onClick={updateUser}>Update User</button> // Add onClick handler for update
        ) : (
          <button onClick={addUser}>Add User</button>
        )}
      </div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <span>{user.name}</span>
            <button className="rounded-5 px-2" onClick={() => editUser(index)}>
              Edit
            </button>
            <button
              className="mt-5 ms-2 rounded-5"
              onClick={() => deleteUser(index)} // Add delete functionality
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudK;
