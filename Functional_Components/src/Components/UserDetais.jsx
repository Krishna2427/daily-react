import { useState } from "react"

const UserDetails = () => {
    // state manegement to the users
    const [users, setUsers] = useState([
        { id: 1, name: "John wick", email: 'johnwick@example.com' },
        { id: 2, name: "Jake Smith", email: "jakeSmith@example.com" }
    ])

    // stete to manege from input for new or editing user
    const [newUser, setNewUser] = useState({ id: "", name: "", email: "" });

    // state to track if the form is edit mode

    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setNewUser({ ...newUser, [name]: value });
    };

    // add new user

    const handleAddUser = (e) => {
        e.preventDefault();
        if (!newUser.name || !newUser.email) return;


        // Add user with  a new unique ID

        const newUserWithId = { ...newUser, id: users.length + 1 };
        setUsers([...users, newUserWithId]);

        // Clear the form after adding

        setNewUser({ id: '', name: '', email: '' });
    };

    // edidt user: popular the form with user details

    const handleEditUser = (user) => {
        setIsEditing(true);
        setNewUser(user);
    }

    // update the user details

    const handleUpdateUser = (e) => {
        e.preventDefault();

        // update the user in the users array
        setUsers(users.map(user => (user.id === newUser.id ? newUser : user)));

        // Clear the form and exit edting mode
        setIsEditing(false);
        setNewUser({ id: '', name: '', email: '' });
    };
    // Delete user
    const handleDeleteUser = (id) => {
        //Remove user from the list based on ID
        setUsers(users.filter(user => user.id !== id));
    };
    return (
        <div className="conatiner">
            <h1>User Maneger</h1>

            {/*  Form to add edit users */}
            <form onSubmit={isEditing ? handleUpdateUser : handleAddUser}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text"
                        name="name"
                        value={newUser.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <br></br>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" 
                           name="email"
                           value={newUser.email}
                           onChange={handleInputChange}
                           required
                    />
                </div>
                <button type="submit" className="btn btn-success mt-2">{isEditing ? 'Update User':'Add User'}</button>
            </form>

            {/* displaying the list of users */}

            <h2>User list</h2>

            <ul className="px-2">
                {users.map((user)=>(
                    <li key={user.id}>
                        {user.name} ({user.email})
                        <button className="btn btn-warning me-2 mt-1 py-2 " onClick={()=> handleEditUser(user)}>Edit</button>
                        <button  className="btn btn-danger " onClick={()=> handleDeleteUser(user)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default UserDetails;