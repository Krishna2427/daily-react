import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom'; 
import UserService from '../../services/userServices';

const UserDetails = () => {
    const [user, setUser] = useState({});
    const { userId } = useParams();

    // Fetch user details based on userId
    const retrieveUserDetails = (userId) => {
        UserService.getUser(userId)
            .then((res) => {
                setUser(res.data);
                console.log("User details fetched:", res.data); // Debugging line
            })
            .catch((err) => console.log("Error fetching user details:", err));
    };

    // useEffect to call retrieveUserDetails when userId changes
    useEffect(() => {
        if (userId) retrieveUserDetails(userId);
    }, [userId]);

    return (
        <div>
            <h2>User Details</h2>
            {user ? (
                <>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <nav>
                        <Link to="settings" className="btn btn-secondary me-2">Settings</Link>
                        <Link to="/users" className="btn btn-secondary">Back to Users</Link>
                    </nav>
                </>
            ) : (
                <p>Loading user details...</p>
            )}
            <Outlet />
        </div>
    );
};

export default UserDetails;
