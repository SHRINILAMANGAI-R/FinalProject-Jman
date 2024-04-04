// import Card from 'react-bootstrap/Card';

// function card() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Card.Link href="#">Card Link</Card.Link>
//         <Card.Link href="#">Another Link</Card.Link>
//       </Card.Body>
//     </Card>
//   );
// }

// export default card;
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