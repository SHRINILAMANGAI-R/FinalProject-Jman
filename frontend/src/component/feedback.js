import React, { useState } from 'react';
import axios from 'axios';
import './styles/CreateUser.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
  const navigate = useNavigate();
  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [trainingName, setTrainingName] = useState('');
  const [trainerName, setTrainerName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmitFeedback = async () => {
    try {
      const response = await axios.post('http://localhost:3001/feedback', {
        id,
        name,
        trainingName,
        trainerName,
        feedback,
      });
      console.log(response.data.message);
      setAlertMessage(response.data.message);
      
    } catch (error) {
      console.error('Error submitting feedback:', error.response.data.message);
      setAlertMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <ul>

          <li><button onClick={() => navigate("/profile")}>Profile</button></li>
          <li><button onClick={() => navigate("/Performance")}>Performance</button></li>
          <li><button onClick={() => navigate("/Assessment")}>Assessments</button></li>
          <li><button onClick={() => navigate("/")}>Logout</button></li>
        </ul>
      </nav>
      <div className="center-container">
        <div className="create-user-container">
          <h2>Submit Feedback</h2>
          <input
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setID(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Training Name"
            value={trainingName}
            onChange={(e) => setTrainingName(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Trainer Name"
            value={trainerName}
            onChange={(e) => setTrainerName(e.target.value)}
          />
          <br />
          <textarea
            placeholder="Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <br />
          <button onClick={handleSubmitFeedback}>Submit Feedback</button>
          {alertMessage && <div className="alert">{alertMessage}</div>}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
