import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../services/userServices';

const UserList = () => {
    const [users, setUsers] = useState([]);

    // Fetch all users
    const retrieveUsers = () => {
        UserService.getAllUsers()
            .then((res) => {
                setUsers(res.data);
                console.log("Users fetched:", res.data); 
            })
            .catch((err) => console.log("Error fetching users:", err));
    };

    const handleDelete = (userId) => {
        UserService.removeUser(userId)
            .then(() => {
                console.log('User deleted successfully');
                setUsers(users.filter((user) => user.id !== userId));
            })
            .catch(err => console.log("Error deleting user:", err));  
    };

    useEffect(() => {
        retrieveUsers();
    }, []);

    return (
        <div className='container mt-5'>
            <h2 className='mb-4'>User List</h2>
            <ul className='list-group'>
                {users.length > 0 ? (
                    users.map((user) => (
                        <li key={user.id} className='list-group-item'>
                            <div className="row">
                                <div className="col">
                                    <span>{user.name.toUpperCase()}</span>
                                </div>
                                <div className="col">
                                    <span>{user.email}</span> 
                                </div>
                                <div className='col-1'>
                                    <Link to={`/users/edit/${user.id}`} className='btn btn-warning btn-sm text-end'>Edit</Link>
                                </div>
                                <div className="col-2">
                                    <Link to={`/users/${user.id}`} className='btn btn-primary btn-sm'>
                                        View Details
                                    </Link>
                                </div>
                                <div className="col-2">
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className='btn btn-danger btn-sm'
                                    >
                                        Delete User
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No users found.</p>
                )}
            </ul>
            <Link to="/users/new" className="btn btn-primary mt-3">Add New User</Link>
        </div>
    );
};

export default UserList;
