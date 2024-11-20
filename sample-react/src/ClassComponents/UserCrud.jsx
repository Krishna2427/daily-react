import { Component } from "react";

class UserCrud extends Component{
    constructor(props){
        super(props)
        this.state ={
            users:[],
            name:"",
            email:"",
            isEditing:false,
            currentUserId:null,
            showTable:false
        };
    }

    // handle input kchanges for the form

    handleInputChange =(e)=>{
        const { name, value} = e.target;
        this.setState({[name]:value});
    }

    // create a new User

    handleAddUser=()=>{
        const {users, name, email} = this.state;
        if(name && email){
            const newUser = {id:Date.now(), name, email}
            this.setState({
                users:[...users,newUser],
                name:"",
                email:"",
                showTable:true,
            });
        }
    };

    //Delete a user

    handleDeleteUser=(id)=>{
        const filteredUsers = this.state.users.filter((user)=>user.id !==id);
        this.setState({users:filteredUsers});
    }

    // Edit a user

    handleEditUser =(id)=>{
        const userToEdit = this.state.users.find((user)=>user.id === id);
        this.setState({
            name:userToEdit.name,
            email:userToEdit.email,
            isEditing:true,
            currentUserId:id,
        });
    };

    // Update the user

    handleUpdateUser=()=>{
        const{users, name, email, currentUserId} = this.state;
        const updatedUsers = users.map((user)=>
            user.id === currentUserId ? {...user, name, email}:user
        );
        this.setState({
            users:updatedUsers,
            name:"",
            email:"" ,
            isEditing:false,
            currentUserId:null,  
            showTable:true     
        });
    };
    render(){
        const {users, name, email, isEditing, showTable }= this.state;

        return(
            <div>
                <h1>User Management</h1>
                <div>
                    <input className="border border-gray-300 rounded" type="text" 
                     name="name"
                     placeholder="Name"
                     value={name}
                     onChange={this.handleInputChange}
                    />
                    <input className="border border-gray-300 ms-2 rounded" type="email" 
                     name="email"
                     placeholder="email"
                     value={email}
                     onChange={this.handleInputChange}
                    />
                    {isEditing ? (
                        <button className="bg-blue-400 rounded ms-2" onClick={this.handleUpdateUser}>Update User</button>
                    ) : (
                     <button className="bg-green-400 rounded px- ms-2 px-2" onClick={this.handleAddUser}>Add User</button>
                    )}
                </div>

                {/* <ul>
                    {users.map((user)=>(
                        <li key={user.id} className="mt-6">
                            {user.name} - {user.email}{" "}
                            <button  className="bg-green-500 rounded px-2" onClick={()=> this.handleEditUser(user.id)}>Edit</button>
                            <button className="bg-red-500 gap-2  rounded ms-3" onClick={()=>this.handleDeleteUser(user.id)}>Delete</button>
                        </li>
                    ))}
                </ul> */}
               {showTable && (
                 <div className="overflow-x-auto mt-10 ">
                 <table className="table-auto w-auto h-auto border-collapse border border-gray-300">
                     <thead>
                         <tr className="bg-gray-200">
                             <th>Name</th>
                             <th>Email</th>
                             <th>Edit</th>
                         </tr>
                     </thead>
                     <tbody>
                         {users.map((user)=>(
                             <tr key={user.id}>
                                  <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                                  <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                                  <td>
                                  <button  className="bg-blue-500 text-white px-2 py-1 rounded" onClick={()=> this.handleEditUser(user.id)}>Edit</button>
                                  <button className="bg-red-500 text-white px-2 py-1 rounded ml-2" onClick={()=>this.handleDeleteUser(user.id)}>Delete</button>
                                  </td>
                             </tr>
                         ))}
                     </tbody>
                 </table>
                 </div>
               )}
            </div>
        )
    }
}
export default UserCrud;