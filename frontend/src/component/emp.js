import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests
import EmpCard from './EmpCard'; // Import the Card component
import './styles/nav.css';
import { useNavigate } from 'react-router-dom';

const EmployeeHome = () => {
  const [trainings, setTrainings] = useState([]);
  const navigate =  useNavigate();

  useEffect(() => {
    fetchTrainings();
  }, []);

  const fetchTrainings = async () => {
    try {
      const response = await axios.get('http://localhost:3001/trainings');
      setTrainings(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div>
      <nav>
        <ul>
          <li><button onClick={() => navigate("/profile")}>Profile</button></li>
          <li><button onClick={() => navigate("/PerformanceDetails")}>Performance</button></li>
          <li><button onClick={() => navigate("/")}>Logout</button></li>
        </ul>
      </nav>
      <h1>Welcome Employee!</h1>
      <div className="training-cards-container">
          {/* <Card key={trainings[0]._id} training={trainings[0]} /> */}
          <EmpCard />
      </div>
    </div>
  );
};


export default EmployeeHome;