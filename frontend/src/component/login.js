import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/login.css'; // Import CSS file for styling
import './styles/style.css';
import axios from 'axios'; // Import axios for making HTTP requests

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [changePasswordError, setChangePasswordError] = useState('');

  const handleLogin = async () => {
    try {
      // Make a POST request to the backend to check credentials
      const response = await axios.post('http://localhost:3001/login', {
        username,
        password,
      });

      localStorage.setItem('User', response.data.username);

      // If the response status is 200, login is successful
      if (response.status === 200) {
        const { role } = response.data;

        // Navigate to the appropriate page based on the user's role
        switch (role) {
          case 'Admin':
            navigate('/AdminHome');
            break;
          case 'Intern':
            navigate('/InternHome');
            break;
          case 'Employee':
            navigate('/EmployeeHome');
            break;
          default:
            // If the role is not recognized, display an error message
            setLoginError('Invalid role.');
        }
      }
    } catch (error) {
      // If an error occurs or credentials are incorrect, display error message
      setLoginError('Incorrect username or password.');
    }
  };

  const handleChangePassword = async () => {
    try {
      // Make a POST request to the backend to change password
      const response = await axios.post('http://localhost:3001/change-password', {
        username,
        password,
        newPassword,
      });

      // Handle response from the server
      if (response.status === 200) {
        setShowChangePassword(false); // Hide change password box
        alert('Password changed successfully!');
      }
    } catch (error) {
      // If an error occurs, display error message
      setChangePasswordError('Failed to change password. Please try again.');
    }
  };

  return (
    <div className="center-container">
      <div className="login-container">
        <div className="login-form-container">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>Login</button>
          <button onClick={() => setShowChangePassword(true)}>Change Password</button>
          {loginError && <p className="error-message">{loginError}</p>}
        </div>
        {showChangePassword && (
          <div className="change-password-form-container">
            <h2>Change Password</h2>
            <input
              type="password"
              placeholder="Current Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleChangePassword}>Save</button>
            {changePasswordError && <p className="error-message">{changePasswordError}</p>}
          </div>
        )}
      </div>
      <div className="image-container">
        <img
          src="https://leapmax.ai/wp-content/uploads/2020/09/Training-management-system-for-remote-support-teams.png"
          alt="Training Management System"
        />
      </div>
    </div>
  );
};

export default Login;
