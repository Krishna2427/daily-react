import http from '../common/http';
const getAllUsers =()=>{
    return  http.get('/users');
};

const getUser =(id) =>{
    return http.get(`/users/${id}`);
};

const createUser =(data)=>{
    return http.post("/users", data);
}

const updateUser =(id, data)=>{
    return http.put(`/users/${id}`, data);
}

const removeUser =(id)=>{
    return http.delete(`/users/${id}`);
}

const removeAllUser =()=>{
    return http.delete(`/users`);
};

const UserService = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    removeUser,
    removeAllUser,
};
export default UserService;