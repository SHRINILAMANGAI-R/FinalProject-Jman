import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import './styles/login.css'; // Import CSS file for styling
import AdminHome from './admin ';
import EmployeeHome from './emp';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    // Check if username and password match admin credentials
    if (username === 'admin' && password === '123') {
      // If credentials match, set loggedIn state to true
      setLoggedIn(true);
    } else {
      // If credentials do not match, display error message
      setLoginError('Incorrect username or password.');
    }
  };

  const [loggedIn, setLoggedIn] = useState(false);

  // If loggedIn is true, navigate to CreateUser page
  if (loggedIn) {
    return <AdminHome/>;
  }

  return (
    <div className="center-container"> {/* Center-align container */}
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
        {loginError && <p className="error-message">{loginError}</p>}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router> {/* Wrap your components in a Router component */}
      <Login />
    </Router>
  );
};

export default App;
