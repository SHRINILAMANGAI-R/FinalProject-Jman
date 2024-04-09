import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './styles/card.css'; 

function InternTrainingList() {
    const [internTrainings, setInternTrainings] = useState([]);
    const [selectedTrainingIds, setSelectedTrainingIds] = useState([]); // State to keep track of selected training IDs

    useEffect(() => {
        fetchTrainings();
    }, []);

    const fetchTrainings = async () => {
        try {
            const response = await axios.get('http://localhost:3001/trainings');
            const internTrainings = response.data.filter(training => training.ScheduledTo === 'Intern');
            setInternTrainings(internTrainings);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleCheckboxChange = async (trainingId) => {
        try {
            // Update selected training IDs state
            setSelectedTrainingIds(prevSelectedTrainingIds => {
                if (prevSelectedTrainingIds.includes(trainingId)) {
                    return prevSelectedTrainingIds.filter(id => id !== trainingId);
                } else {
                    return [...prevSelectedTrainingIds, trainingId];
                }
            });

            // Call backend endpoint to update ModuleCompletion count
            await axios.put(`http://localhost:3001/trainings/${trainingId}/module-completion`);
        } catch (error) {
            console.error('Error updating module completion count:', error);
        }
    };

    return (
        <div className="training-list-container">
            <h1 className="training-list-heading">Intern Training Schedule</h1>
            <div className="training-cards-container">
                {internTrainings.length > 0 ? (
                    internTrainings.map(training => (
                        <div className="training-card card" key={training.t_id}>
                            <div className="card-header">
                                <h2 className="training-card-title">
                                    {training.TrainingName}
                                </h2>
                            </div>
                            <div className="card-body">
                                <p><strong>Date:</strong> {training.TrainingDate}</p>
                                <p><strong>Time:</strong> {training.TrainingStartTime} - {training.TrainingEndTime}</p>
                                <p><strong>Trainer:</strong> {training.TrainerName}</p>
                                <p><strong>Scheduled By:</strong> {training.ScheduledBy}</p>
                                <p><strong>Scheduled To:</strong> {training.ScheduledTo}</p>
                            </div>
                            <div className="card-footer">
                                {selectedTrainingIds.includes(training.t_id) && <a href="#">Feedback</a>}
                                <input type="checkbox" id={`feedbackCheckbox-${training.t_id}`} checked={selectedTrainingIds.includes(training.t_id)} onChange={() => handleCheckboxChange(training.t_id)} />
                                <label htmlFor={`feedbackCheckbox-${training.t_id}`}>Module Completed</label>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No intern training schedules available</p>
                )}
            </div>
        </div>
    );
}

export default InternTrainingList;








// import React, { useState, useEffect } from 'react';
// import './components/Homepage.css'; // Import CSS file for styling
 
// function TrainingList() {
//     const [trainings, setTrainings] = useState([]);
 
//     useEffect(() => {
//         fetchTrainings();
//     }, []);
 
 
//     const fetchTrainings = async () => {
//         try {
//             const response = await fetch('http://localhost:4000/trainings', {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }
//             });
//             if (!response.ok) {
//                 throw new Error('Failed to fetch data');
//             }
//             const data = await response.json();
//             setTrainings(data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };
 
//     return (
//         <div className="training-list-container">
//             <h1 className="training-list-heading">Training Schedule</h1>
//             <div className="training-cards-container">
//                 {trainings.map(training => (
//                     <div className="training-card card" key={training.id}>
//                         <h2 className="training-card-title">{training.training_topic}</h2>
//                         <p><strong>Date:</strong> {training.training_date}</p>
//                         <p><strong>Time:</strong> {training.start_time} - {training.end_time}</p>
//                         <p><strong>Audience:</strong> {training.intended_audience}</p>
//                         <p><strong>Mail Sent:</strong> {training.mail_sent ? 'Yes' : 'No'}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
 
// export default TrainingList;