import axios from "axios";

const API_URL ='http://localhost:3000/users';


// Fetch all users
export const getAllUsers = async() =>{
    try{
        const res = await axios.get(API_URL);
        return res.data;
    }catch(err){
        console.error("Error fetching users:", err);
        throw err;
    }
};

// Fetch a user by ID
export const getUser = async(userId)=>{
    try{
        const res = await axios.get(`${API_URL}/${userId}`);
        return res.data;
    } catch(err){
        console.error(`Error fetching user with ID ${userId}:`, err);
        throw err;
    }
}

// Create a new user

export const  createUser = async(user)=>{
    try{
        const res = await axios.post(API_URL, user);
        return res.data;
    }catch(err){
        console.log("Error craeting user");
        throw err;
    }
}

// update a  user by ID
export const updateUser =async (userId, user)=>{
  try{
    const res = await axios.put(`${API_URL}/${user}`, user)
    return res.data;
  }catch(err){
    console.error('error upate user', err);
    
  }
}


// Delete a by user ID

export const deleteUser = async (userId) => {
    try{
        const res = await axios.delete(`${API_URL}/${userId}`);
        return res.data;
    }catch(err){
        console.error(`Error deleting user with ID ${userId}:`, err);
        
    }
}
