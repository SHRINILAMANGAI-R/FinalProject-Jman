import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/PerformanceDetails.css'; // Import the CSS file for styling
import "./styles/nav.css";
import { useNavigate } from 'react-router-dom';
 
const User = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/users');
        setUsers(response.data.rows); // Update to access response.data.rows
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Error fetching users. Please try again later.');
      }
    };
 
    fetchUsers();
  }, []);
 
  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3001/api/users/${userId}`);
      // After successful deletion, update the users state to reflect the changes
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
      // Handle error appropriately, such as showing an error message to the user
    }
  };
 
  if (error) {
    return <div>Error: {error}</div>;
  }
 
  return (
    <div>
    <nav className="navbar">
      <ul>
        <li><button onClick={() => navigate("/AdminHome")}>Home</button></li>
        <li><button onClick={() => navigate("/createuser")}>Create User</button></li>
        <li><button onClick={() => navigate("/profile")}>Profile</button></li>
        <li><button onClick={() => navigate("/PerformanceDetails")}>Performance</button></li>
        {/* <li><button onClick={() => navigate("/AddEvent")}>AddTraining</button></li> */}
        <li><button onClick={() => navigate("/User")}>Users</button></li>
        <li><button onClick={() => navigate("/")}>Logout</button></li>
      </ul>
    </nav>
    <div className="table-container">
      <h1>User Details</h1>
      <table className="styled-table"> {/* Apply the 'styled-table' class */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>DOB</th>
            <th>Role</th>
            <th>Department</th>
            <th>Action</th> {/* Add a new header column for the delete button */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.dob}</td>
              <td>{user.role}</td>
              <td>{user.department}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td> {/* Add a delete button */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};
 
export default User;