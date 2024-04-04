import { React, useState } from 'react';
import './styles/nav.css';
import {useNavigate} from 'react-router-dom';
import card from "./card.js"

const InternHome = () => {
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
          <h1>Welcome Intern!</h1>
          <card/>
          
    </div>
  );
};

export default InternHome;
