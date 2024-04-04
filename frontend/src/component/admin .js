// import React, { useState } from 'react';
// import CreateUser from './CreateUser'; // Import CreateUser component
// import AddEvent from './AddTraining'; // Import AddEvent component
// import Profile from './profile'; // Import Profile component

// const AdminHome = () => {
//   const [showCreateUser, setShowCreateUser] = useState(false);
//   const [showAddEvent, setShowAddEvent] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);

//   // Toggle functions to show/hide components
//   const toggleCreateUser = () => {
//     setShowCreateUser(prevState => !prevState);
//     setShowAddEvent(false);
//     setShowProfile(false);
//   };

//   const toggleAddEvent = () => {
//     setShowAddEvent(prevState => !prevState);
//     setShowCreateUser(false);
//     setShowProfile(false);
//   };

//   const toggleProfile = () => {
//     setShowProfile(prevState => !prevState);
//     setShowCreateUser(false);
//     setShowAddEvent(false);
//   };

//   return (
//     <div>
//       <nav>
//         <ul>
//           <li><button onClick={toggleCreateUser}>Create User</button></li>
//           <li><button onClick={toggleAddEvent}>Add Event</button></li>
//           <li style={{ float: 'right' }}><button onClick={toggleProfile}>Profile</button></li>
//         </ul>
//       </nav>
      
//       <h1>Welcome Admin!</h1>
//       <p>This is the home page for Admin.</p>
//       <p>Explore your tasks, projects, and other work-related activities here.</p>

//       {/* Conditional rendering of components */}
//       {showCreateUser && <CreateUser />}
//       {showAddEvent && <AddEvent />}
//       {showProfile && <Profile />}
//     </div>
//   );
// };

// export default AdminHome;





// import React, { useState } from 'react';
// import CreateUser from './CreateUser'; // Import CreateUser component
// import AddEvent from './AddTraining'; // Import AddEvent component
// import Profile from './profile'; // Import Profile component
// import Login from './login'; // Import Login component with capital L
// import PerformanceDetails from './PerformanceDetails'; // Import PerformanceDetails component
// import './index.html'; // Import index.html contents

// const AdminHome = () => {
//   const [showCreateUser, setShowCreateUser] = useState(false);
//   const [showAddEvent, setShowAddEvent] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   const [showPerformance, setShowPerformance] = useState(false); // State variable for performance details
//   const [isLoggedIn, setIsLoggedIn] = useState(true);

//   // Function to handle logout
//   const handleLogout = () => {
//     // Perform logout actions here (e.g., clear session, remove tokens, etc.)
//     // Update login status to false
//     setIsLoggedIn(false);
//   };

//   // Toggle functions to show/hide components
//   const toggleCreateUser = () => {
//     setShowCreateUser(prevState => !prevState);
//     setShowAddEvent(false);
//     setShowProfile(false);
//     setShowPerformance(false); // Hide performance details when switching to other views
//   };

//   const toggleAddEvent = () => {
//     setShowAddEvent(prevState => !prevState);
//     setShowCreateUser(false);
//     setShowProfile(false);
//     setShowPerformance(false); // Hide performance details when switching to other views
//   };

//   const toggleProfile = () => {
//     setShowProfile(prevState => !prevState);
//     setShowCreateUser(false);
//     setShowAddEvent(false);
//     setShowPerformance(false); // Hide performance details when switching to other views
//   };

//   const togglePerformance = () => {
//     setShowPerformance(prevState => !prevState);
//     setShowCreateUser(false);
//     setShowAddEvent(false);
//     setShowProfile(false); // Hide profile when viewing performance details
//   };

//   return (
//     <div>
//       {isLoggedIn ? ( // Render AdminHome if logged in
//         <>
//           <nav>
//             <ul>
//               <li><button onClick={toggleCreateUser}>Create User</button></li>
//               <li><button onClick={toggleAddEvent}>Add Training</button></li>
//               <li><button onClick={toggleProfile}>Profile</button></li>
//               <li><button onClick={togglePerformance}>Performance</button></li> {/* Button for performance details */}
//               <li>
//                 <button onClick={handleLogout}>Logout</button>
//               </li>
//             </ul>
//           </nav>
//           <h1>Welcome Admin!</h1>
//           {/* Render index.html contents here */}
//           <div dangerouslySetInnerHTML={{ __html: require('./index.html') }} />

//           {/* Conditional rendering of components */}
//           {showCreateUser && <CreateUser />}
//           {showAddEvent && <AddEvent />}
//           {showProfile && <Profile />}
//           {showPerformance && <PerformanceDetails />} {/* Render PerformanceDetails component when showPerformance is true */}
//         </>
//       ) : (
//         // Render login component if not logged in
//         <Login />
//       )}
//     </div>
//   );
// };

// export default AdminHome;




// import React, { useState, useEffect } from 'react';
// import CreateUser from './CreateUser'; // Import CreateUser component
// import AddEvent from './AddTraining'; // Import AddEvent component
// import Profile from './profile'; // Import Profile component
// import Login from './login'; // Import Login component with capital L
// import PerformanceDetails from './PerformanceDetails'; // Import PerformanceDetails component

// const AdminHome = () => {
//   const [showCreateUser, setShowCreateUser] = useState(false);
//   const [showAddEvent, setShowAddEvent] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   const [showPerformance, setShowPerformance] = useState(false); // State variable for performance details
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const [indexHTML, setIndexHTML] = useState(null); // State to store index.html content

//   useEffect(() => {
//     // Fetch index.html content when component mounts
//     fetch('./index.html')
//       .then(response => response.text())
//       .then(html => setIndexHTML(html))
//       .catch(error => console.error('Error fetching index.html:', error));
//   }, []);

//   // Function to handle logout
//   const handleLogout = () => {
//     // Perform logout actions here (e.g., clear session, remove tokens, etc.)
//     // Update login status to false
//     setIsLoggedIn(false);
//   };

//   // Toggle functions to show/hide components
//   const toggleCreateUser = () => {
//     setShowCreateUser(prevState => !prevState);
//     setShowAddEvent(false);
//     setShowProfile(false);
//     setShowPerformance(false); // Hide performance details when switching to other views
//   };

//   const toggleAddEvent = () => {
//     setShowAddEvent(prevState => !prevState);
//     setShowCreateUser(false);
//     setShowProfile(false);
//     setShowPerformance(false); // Hide performance details when switching to other views
//   };

//   const toggleProfile = () => {
//     setShowProfile(prevState => !prevState);
//     setShowCreateUser(false);
//     setShowAddEvent(false);
//     setShowPerformance(false); // Hide performance details when switching to other views
//   };

//   const togglePerformance = () => {
//     setShowPerformance(prevState => !prevState);
//     setShowCreateUser(false);
//     setShowAddEvent(false);
//     setShowProfile(false); // Hide profile when viewing performance details
//   };

//   return (
//     <div>
//       {isLoggedIn ? ( // Render AdminHome if logged in
//         <>
//           <nav>
//             <ul>
//               <li><button onClick={toggleCreateUser}>Create User</button></li>
//               <li><button onClick={toggleAddEvent}>Add Training</button></li>
//               <li><button onClick={toggleProfile}>Profile</button></li>
//               <li><button onClick={togglePerformance}>Performance</button></li> {/* Button for performance details */}
//               <li>
//                 <button onClick={handleLogout}>Logout</button>
//               </li>
//             </ul>
//           </nav>
//           <h1>Welcome Admin!</h1>
//           {/* Render index.html contents here */}
//           {indexHTML && <div dangerouslySetInnerHTML={{ __html: indexHTML }} />}

//           {/* Conditional rendering of components */}
//           {showCreateUser && <CreateUser />}
//           {showAddEvent && <AddEvent />}
//           {showProfile && <Profile />}
//           {showPerformance && <PerformanceDetails />} {/* Render PerformanceDetails component when showPerformance is true */}
//         </>
//       ) : (
//         // Render login component if not logged in
//         <Login />
//       )}
//     </div>
//   );
// };

// export default AdminHome;










import React, { useState } from 'react';
import MyCalendar from './Schedule'; // Import Schedule component
import {useNavigate} from 'react-router-dom';
import "./styles/nav.css"

const AdminHome = () => {

  const navigate =  useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout actions here (e.g., clear session, remove tokens, etc.)
    // Update login status to false
    navigate("/");
  };
  

  // Toggle functions to show/hide components
  const toggleCreateUser = () => {
    navigate("/createuser");
  };

  const toggleProfile = () => {
    navigate("/profile");
  };

  const togglePerformance = () => {
    navigate("/PerformanceDetails");
  };
  const toggleAddTraining = () => {
    navigate("/AddEvent");
  };

  return (
    <div>
          <nav>
            <ul>
              <li><button onClick={toggleCreateUser}>Create User</button></li>
              <li><button onClick={toggleProfile}>Profile</button></li>
              <li><button onClick={togglePerformance}>Performance</button></li> 
              <li><button onClick={toggleAddTraining}>AddTraining</button></li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </nav>
          <h1>Welcome Admin!</h1>
          <MyCalendar />
    </div>
  );
};

export default AdminHome;
