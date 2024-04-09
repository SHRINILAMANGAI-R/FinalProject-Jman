// EmployeeTrainingList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests
import './styles/card.css'; // Import CSS file for styling

function EmployeeTrainingList() {
    const [employeeTrainings, setEmployeeTrainings] = useState([]);
    const [showFeedbackLink, setShowFeedbackLink] = useState(false);

    useEffect(() => {
        fetchEmployeeTrainings();
    }, []);

    const fetchEmployeeTrainings = async () => {
        try {
            const response = await axios.get('http://localhost:3001/trainings');
            const employeeTrainings = response.data.filter(training => training.ScheduledTo === 'Employee');
            setEmployeeTrainings(employeeTrainings);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleCheckboxChange = () => {
        setShowFeedbackLink(!showFeedbackLink);
    };

    

    return (
        <div className="training-list-container">
            <h1 className="training-list-heading">Employee Training Schedule</h1>
            <div className="training-cards-container">
                {employeeTrainings.length > 0 ? (
                    employeeTrainings.map(training => (
                        <div className="training-card card" key={training.id}>
                            <div className="card-header">
                            <h2 className="training-card-title">{training.TrainingName}</h2></div>
                            <div className="card-body">
                            <p><strong>Date:</strong> {training.TrainingDate}</p>
                            <p><strong>Time:</strong> {training.TrainingStartTime} - {training.TrainingEndTime}</p>
                            <p><strong>Trainer:</strong> {training.TrainerName}</p>
                            <p><strong>Scheduled By:</strong> {training.ScheduledBy}</p>
                            <p><strong>Scheduled To:</strong> {training.ScheduledTo}</p></div>
                            <div className="card-footer">
                            {showFeedbackLink && <a href="#">Feedback</a>}
                                <input type="checkbox" id="feedbackCheckbox" checked={showFeedbackLink} onChange={handleCheckboxChange} />
                                <label htmlFor="feedbackCheckbox">Module Completed</label>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No employee training schedules available</p>
                )}
            </div>
        </div>
    );
}

export default EmployeeTrainingList;
