import React, { useState } from 'react';
import Profile from './profile'; // Import Profile component
import Login from './login'; // Import Login component with capital L
import PerformanceDetails from './PerformanceDetails'; // Import PerformanceDetails component
import MyCalendar from './Schedule'; // Import Schedule component
import './styles/nav.css';
import {useNavigate} from 'react-router-dom';

const EmployeeHome = () => {
  const navigate =  useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [showPerformance, setShowPerformance] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout actions here (e.g., clear session, remove tokens, etc.)
    // Update login status to false
    navigate("/");
  };

  const toggleProfile = () => {
    navigate("/profile");
  };

  const togglePerformance = () => {
    navigate("/PerformanceDetails");
  };

  return (
    <div>
          <nav>
            <ul>
              <li><button onClick={toggleProfile}>Profile</button></li>
              <li><button onClick={togglePerformance}>Performance</button></li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </nav>
          <h1>Welcome Employee!</h1>
          <MyCalendar />
    </div>
  );
};

export default EmployeeHome;