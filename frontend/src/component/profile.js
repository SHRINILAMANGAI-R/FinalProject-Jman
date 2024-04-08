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

  useEffect(() => {
    // Fetch user data from backend when the component mounts
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/user-profile-fetch');
        console.log(response.data) 
        setUserData(response.data);
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
      await axios.put('http://localhost:3001/user-profile', userData); // Assuming this endpoint updates user data
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

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
          value={userData.dob}
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


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './styles/CreateUser.css';

// const Profile = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch user data from backend when the component mounts
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/user-profile');
//         setUserData(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put('http://localhost:3001/user-profile', userData);
//       alert('Profile updated successfully');
//     } catch (error) {
//       console.error('Error updating profile:', error);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!userData) {
//     return <div>Error fetching user data</div>;
//   }

//   return (
//     <div className="center-container">
//       <div className="create-user-container">
//         <h2>User Profile</h2>
//         <input
//           type="text"
//           placeholder="Name"
//           name="name"
//           value={userData.name}
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={userData.email}
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="Username"
//           name="username"
//           value={userData.username}
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="date"
//           placeholder="Date of Birth"
//           name="dob"
//           value={userData.dob}
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={userData.password}
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="Role"
//           name="role"
//           value={userData.role}
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="Department"
//           name="department"
//           value={userData.department}
//           onChange={handleChange}
//         />
//         <br />
//         <button onClick={handleSubmit}>Save Changes</button>
//       </div>
//     </div>
//   );
// };

// export default Profile;
