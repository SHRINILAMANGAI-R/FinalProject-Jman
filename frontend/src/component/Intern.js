import React from 'react';
import Profile from './profile'; // Import Profile component
import Login from './login'; // Import Login component with capital L
import PerformanceDetails from './PerformanceDetails'; // Import PerformanceDetails component
import MyCalendar from './Schedule'; // Import Schedule component
import './styles/AddTraining.css';

const InternHome = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showPerformance, setShowPerformance] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout actions here (e.g., clear session, remove tokens, etc.)
    // Update login status to false
    setIsLoggedIn(false);
  };

  const toggleProfile = () => {
    setShowProfile(prevState => !prevState);
    setShowPerformance(false); // Hide performance details when switching to other views
  };

  const togglePerformance = () => {
    setShowPerformance(prevState => !prevState);
    setShowProfile(false); // Hide profile when viewing performance details
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
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

          {/* Render Schedule component below the navbar */}
          <MyCalendar />

          {/* Conditional rendering of other components */}
          {showProfile && <Profile />}
          {showPerformance && <PerformanceDetails />}
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default InternHome;
