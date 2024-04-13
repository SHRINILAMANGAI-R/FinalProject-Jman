import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles/CreateUser.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [dob, setDOB] = useState(null); // Store DOB as Date object
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState('');
  const roles = ['Employee', 'Intern', 'Admin'];
  const departments = ['Technical', 'Non-Technical', 'Management', 'HR', 'Finance'];
  const [alertMessage, setAlertMessage] = useState('');

  const handleCreateUser = async () => {
    try {
      const response = await axios.post('http://localhost:3001/CreateUser', {
        name,
        email,
        username,
        dob,
        role,
        department,
      });
      setAlertMessage(response.data.message);
      navigate("/AdminHome");
    } catch (error) {
      console.error('Error during user creation:', error.response.data.message);
      setAlertMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><button onClick={() => navigate("/AdminHome")}>Home</button></li>
          <li><button onClick={() => navigate("/createuser")}>Create User</button></li>
          <li><button onClick={() => navigate("/profile")}>Profile</button></li>
          <li><button onClick={() => navigate("/PerformanceDetails")}>Performance</button></li>
          <li><button onClick={() => navigate("/User")}>Users</button></li>
          <li><button onClick={() => navigate("/")}>Logout</button></li>
        </ul>
      </nav>
      <div className="center-container">
        <div className="create-user-container">
          <h2>Create User</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <DatePicker
            selected={dob}
            onChange={(date) => setDOB(date)}
            placeholderText="Date of Birth"
          />
          <br />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            {roles.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
          <br />
          <select value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="">Select Department</option>
            {departments.map((department, index) => (
              <option key={index} value={department}>
                {department}
              </option>
            ))}
          </select>
          <br />
          <button onClick={handleCreateUser}>Create User</button>
          {alertMessage && <div className="alert">{alertMessage}</div>}
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
