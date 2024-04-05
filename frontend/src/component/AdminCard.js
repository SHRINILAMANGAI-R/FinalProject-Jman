import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests
import './styles/card.css'; // Import CSS file for styling

function TrainingList() {
    const [internTrainings, setInternTrainings] = useState([]);
    const [employeeTrainings, setEmployeeTrainings] = useState([]);
    const [selectedTraining, setSelectedTraining] = useState(null);

    useEffect(() => {
        fetchTrainings();
    }, []);

    const fetchTrainings = async () => {
        try {
            const response = await axios.get('http://localhost:3001/trainings');
            const internTrainings = response.data.filter(training => training.ScheduledTo === 'Intern');
            const employeeTrainings = response.data.filter(training => training.ScheduledTo === 'Employee');
            setInternTrainings(internTrainings);
            setEmployeeTrainings(employeeTrainings);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    const handleDelete = async (id) => {
        try {

            
            await axios.delete(`http://localhost:3001/Admintrainings/${id}`);
            fetchTrainings(); // Refresh the training list after deletion
        } catch (error) {
            console.error('Error deleting training:', error);
        }
    };

    const handleEdit = (training) => {
        setSelectedTraining(training);
    };

    const handleUpdateTraining = async (updatedTraining) => {
        try {
            await axios.put(`http://localhost:3001/Admintrainings/${updatedTraining.id}`, updatedTraining);
            fetchTrainings(); // Refresh the training list after update
            setSelectedTraining(null); // Close the modal after saving changes
        } catch (error) {
            console.error('Error updating training:', error);
        }
    };

    return (
        <>
            <div className="training-list-container">
                <h1 className="training-list-heading">Intern Training Schedule</h1>
                <div className="training-cards-container">
                    {internTrainings.length > 0 ? (
                        internTrainings.map(training => (
                            <div className="training-card card" key={training.id}>
                                <h2 className="training-card-title">{training.TrainingName}</h2>
                                <p><strong>Date:</strong> {training.TrainingDate}</p>
                                <p><strong>Time:</strong> {training.TrainingStartTime} - {training.TrainingEndTime}</p>
                                <p><strong>Trainer:</strong> {training.TrainerName}</p>
                                <p><strong>Scheduled By:</strong> {training.ScheduledBy}</p>
                                <p><strong>Scheduled To:</strong> {training.ScheduledTo}</p>
                                <button onClick={() => handleEdit(training)}>Edit</button>
                                <button onClick={() => handleDelete(training.id)}>Delete</button>
                            </div>
                        ))
                    ) : (
                        <p>No intern training schedules available</p>
                    )}
                </div>
            </div>
            <div className="training-list-container">
                <h1 className="training-list-heading">Employee Training Schedule</h1>
                <div className="training-cards-container">
                    {employeeTrainings.length > 0 ? (
                        employeeTrainings.map(training => (
                            <div className="training-card card" key={training.id}>
                                <h2 className="training-card-title">{training.TrainingName}</h2>
                                <p><strong>Date:</strong> {training.TrainingDate}</p>
                                <p><strong>Time:</strong> {training.TrainingStartTime} - {training.TrainingEndTime}</p>
                                <p><strong>Trainer:</strong> {training.TrainerName}</p>
                                <p><strong>Scheduled By:</strong> {training.ScheduledBy}</p>
                                <p><strong>Scheduled To:</strong> {training.ScheduledTo}</p>
                                <button onClick={() => handleEdit(training)}>Edit</button>
                                <button onClick={() => handleDelete(training.id)}>Delete</button>
                            </div>
                        ))
                    ) : (
                        <p>No employee training schedules available</p>
                    )}
                </div>
            </div>
            {/* Modal for editing training details */}
            {selectedTraining && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setSelectedTraining(null)}>&times;</span>
                        <h2>Edit Training</h2>
                        {/* Your edit form or modal content here */}
                        <button onClick={() => handleUpdateTraining(selectedTraining)}>Save Changes</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default TrainingList;
