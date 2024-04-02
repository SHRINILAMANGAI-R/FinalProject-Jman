import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles/CreateUser.css';
import './styles/AddTraining.css';

function AddEvent() {
  const navigate = useNavigate();
  const userID = localStorage.getItem('userID');

  const [show, setShow] = useState(true); // Show the modal by default
  const [trainingName, setTrainingName] = useState('');
  const [trainingDate, setTrainingDate] = useState(new Date());
  const [trainingStartTime, setTrainingStartTime] = useState(new Date());
  const [trainingEndTime, setTrainingEndTime] = useState(new Date());
  const [trainerName, setTrainerName] = useState('');
  const [scheduledTo, setScheduledTo] = useState('');
  const [scheduledBy, setScheduledBy] = useState('');

  useEffect(() => {
    if (!userID) {
      navigate('/');
    }
  }, [navigate, userID]);

  const handleClose = () => {
    setShow(false);
    // Reset state variables
    setTrainingName('');
    setTrainingDate(new Date());
    setTrainingStartTime(new Date());
    setTrainingEndTime(new Date());
    setTrainerName('');
    setScheduledTo('');
    setScheduledBy('');
  };

  const handleSave = () => {
    // Construct new training object
    const newTraining = {
      trainingName,
      trainingDate: trainingDate.toISOString(),
      trainingStartTime: trainingStartTime.toISOString(),
      trainingEndTime: trainingEndTime.toISOString(),
      trainerName,
      scheduledTo,
      scheduledBy
    };

    // Send new training data to server
    fetch('http://localhost:8080/trainings/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTraining),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        handleClose();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
    className="center-container"
  >
    <div className="create-user-container">
      <Modal.Header closeButton>
        <Modal.Title><h2>Add Training</h2></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="trainingName">
            <Form.Label>Training Name</Form.Label>
            <Form.Control
              type="text"
              value={trainingName}
              onChange={(e) => setTrainingName(e.target.value)}
              placeholder="Enter training name"
            />
          </Form.Group>
          <Form.Group controlId="trainingDate">
            <Form.Label>Training Date</Form.Label>
            <br />
            <DatePicker
              selected={trainingDate}
              onChange={(date) => setTrainingDate(date)}
              dateFormat="P"
            />
          </Form.Group>
          <Form.Group controlId="trainingStartTime">
            <Form.Label>Training Start Time</Form.Label>
            <br />
            <DatePicker
              selected={trainingStartTime}
              onChange={(date) => setTrainingStartTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </Form.Group>
          <Form.Group controlId="trainingEndTime">
            <Form.Label>Training End Time</Form.Label>
            <br />
            <DatePicker
              selected={trainingEndTime}
              onChange={(date) => setTrainingEndTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </Form.Group>
          <Form.Group controlId="trainerName">
            <Form.Label>Trainer Name</Form.Label>
            <Form.Control
              type="text"
              value={trainerName}
              onChange={(e) => setTrainerName(e.target.value)}
              placeholder="Enter trainer name"
            />
          </Form.Group>
          <Form.Group controlId="scheduledBy">
            <Form.Label>Scheduled By</Form.Label>
            <Form.Control
              type="text"
              value={scheduledBy}
              onChange={(e) => setScheduledBy(e.target.value)}
              placeholder="Enter scheduled By"
            />
          </Form.Group>
          <Form.Group controlId="scheduledTo">
            <Form.Label>Scheduled To</Form.Label>
            <Form.Control
              type="text"
              value={scheduledTo}
              onChange={(e) => setScheduledTo(e.target.value)}
              placeholder="Enter scheduled to"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </div>
  </Modal>
  
  );
}

export default AddEvent;
