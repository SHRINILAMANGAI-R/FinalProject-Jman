import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/CreateUser.css';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    username: '',
    dob: '',
    password: '',
    role: '',
    department: ''
  });
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = localStorage.getItem('User');
        const response = await axios.get(`http://localhost:3001/user-profile-fetch/${user}`);
        setUserData(response.data[0]); // Set initial state with fetched user data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = localStorage.getItem('User');
      
      await axios.put(`http://localhost:3001/user-profile/${user}`, userData); // Send userData directly
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };
  const adjustDateToTimeZone = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed
    return `${year}-${month}-${day}`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="center-container">
      <div className="create-user-container">
        <h2>User Profile</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
        <br />
        <input
          type="date"
          placeholder="Date of Birth"
          name="dob"
          value={adjustDateToTimeZone(userData.dob)} // Add conditional check for userData.dob
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Role"
          name="role"
          value={userData.role}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Department"
          name="department"
          value={userData.department}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Save Changes</button>
      </div>
    </div>
  );
};

export default Profile;





