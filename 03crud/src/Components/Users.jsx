import { Component } from "react";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        
        // Define the maximum length for the phone number
        const maxPhoneLength = 20;
  
        // Truncate phone numbers if they exceed the maximum length
        const truncatedUsers = data.map((user) => ({
          ...user,
          phone: user.phone.length > maxPhoneLength ? user.phone.substring(0, maxPhoneLength) : user.phone, // Fixed this line
        }));
  
        // Update the state with the fetched users
        this.setState({ users: [...truncatedUsers] }); // Update state with truncated users
  
        // Send the user data to the backend to store it in MySQL
        return fetch("http://localhost:5000/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(truncatedUsers), // Use truncated users here
        });
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data); // Log the response from the server
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }  
  render() {
    return (
      <div>
        <div>
          <h3>Users: {this.state.users.length}</h3>
        </div>
        <div className="row container overflow-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user, index) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{`${user.address.street} ${user.address.suite}, ${user.address.city}`}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>{user.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Users;
