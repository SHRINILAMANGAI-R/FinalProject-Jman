import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get('http://localhost:3001/api/users');
          console.log('Response:', response);
          console.log('Data:', response.data);
          setUsers(response.data);
        } catch (error) {
          console.error('Error fetching users:', error);
          setError('Error fetching users. Please try again later.');
        }
      };
  
      fetchUsers();
    }, []);
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
      <div>
        <h1>User Details</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>DOB</th>
              <th>Role</th>
              <th>Department</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default User;
  