import React from 'react';
import AdminCard from './AdminCard';
import MyCalendar from './Schedule'; // Import Schedule component
import {useNavigate} from 'react-router-dom';
import "./styles/nav.css"

const AdminHome = () => {

  const navigate =  useNavigate();


  
  return (
    <div>
          <nav>
            <ul>
              <li><button onClick={() => navigate("/AdminHome")}>Home</button></li>
              <li><button onClick={() => navigate("/createuser")}>Create User</button></li>
              <li><button onClick={() => navigate("/profile")}>Profile</button></li>
              <li><button onClick={() => navigate("/PerformanceDetails")}>Performance</button></li> 
              {/* <li><button onClick={() => navigate("/AddEvent")}>AddTraining</button></li> */}
              <li><button onClick={() => navigate("/Users")}>Users</button></li>
              <li><button onClick={() => navigate("/")}>Logout</button></li>
            </ul>
          </nav>
          <h1>Welcome Admin!</h1>
          <MyCalendar />
    </div>
  );
};

export default AdminHome;
