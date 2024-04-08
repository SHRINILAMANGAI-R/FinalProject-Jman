// import React, { useEffect, useState } from 'react';
// import './styles/style.css';
// import { Calendar } from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import axios from 'axios';

// const MyCalendar = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [calendar, setCalendar] = useState(null);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [showTrainingDetailsModal, setShowTrainingDetailsModal] = useState(false);
//   const [events, setEvents] = useState([]);
//   const [formData, setFormData] = useState({
//     eventName: '',
//     trainingDate: '',
//     startTime: '',
//     endTime: '',
//     trainerName: '',
//     scheduledBy: '',
//     scheduledTo: '',
//     eventColor: '#3788d8' // default color
//   });

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/api/events');
//         const fetchedEvents = response.data.map(event => ({
//           id: event.t_id,
//           title: event.TrainingName,
//           start: event.TrainingDate + 'T' + event.startTime,
//           end: event.TrainingDate + 'T' + event.endTime,
//           extendedProps: {
//             trainerName: event.TrainerName,
//             scheduledBy: event.ScheduledBy,
//             scheduledTo: event.ScheduledTo
//           }
//         }));
//         setEvents(fetchedEvents);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };
//     fetchEvents();

//     const calendarEl = document.getElementById('calendar');
//     const newCalendar = new Calendar(calendarEl, {
//       plugins: [dayGridPlugin],
//       initialView: 'dayGridMonth',
//       events: events,
//       eventClick: handleEventClick
//     });
//     newCalendar.render();
//     setCalendar(newCalendar);
//   }, []);

//   const handleModal = () => {
//     setShowModal(!showModal);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/api/training', formData);

//       const newEvent = {
//         id: response.data.t_id,
//         title: formData.eventName,
//         start: formData.trainingDate + 'T' + formData.startTime,
//         end: formData.trainingDate + 'T' + formData.endTime,
//         color: formData.eventColor,
//         extendedProps: {
//           trainerName: formData.trainerName,
//           scheduledBy: formData.scheduledBy,
//           scheduledTo: formData.scheduledTo
//         }
//       };
//       setEvents([...events, newEvent]);

//       if (calendar) {
//         calendar.addEvent(newEvent);
//         calendar.refetchEvents();
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }

//     setShowModal(false);
//   };

//   const handleEventClick = (info) => {
//     setSelectedEvent(info.event);
//     setShowTrainingDetailsModal(true);
//   };

//   const handleDelete = async () => {
//     if (selectedEvent) {
//       try {
//         await axios.delete(`http://localhost:3001/api/training/${selectedEvent.id}`);
//         selectedEvent.remove();
//         setShowTrainingDetailsModal(false);
//         setEvents(events.filter(event => event.id !== selectedEvent.id)); // Remove the event from events state
//         setSelectedEvent(null); // Clear selectedEvent state
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     }
//   };
  
//   const handleSave = async () => {
//     try {
//       await axios.put(`http://localhost:3001/api/training/${selectedEvent.id}`, formData);
      
//       selectedEvent.setExtendedProp('trainerName', formData.trainerName);
//       selectedEvent.setExtendedProp('scheduledBy', formData.scheduledBy);
//       selectedEvent.setExtendedProp('scheduledTo', formData.scheduledTo);
//       selectedEvent.setProp('title', formData.eventName);
//       selectedEvent.setStart(formData.trainingDate + 'T' + formData.startTime);
//       selectedEvent.setEnd(formData.trainingDate + 'T' + formData.endTime);
//       selectedEvent.setProp('color', formData.eventColor);
      
//       calendar.refetchEvents();
//     } catch (error) {
//       console.error('Error:', error);
//     }

//     setShowTrainingDetailsModal(false);
//   };
  
//   const handleCancel = () => {
//     setShowTrainingDetailsModal(false);
//   };

//   return (
//     <div>
//       <header className="cd__intro">
//         <div className="cd__action">
//           <h1>Training Schedule</h1>
//           <button className="btn btn-primary" onClick={handleModal}>Add Training</button>
//         </div>
//       </header>

//       <main className="cd__main">
//         <div id='calendar'></div>
//       </main>

//       {showModal && (
//         <div className="modal fade edit-form" id="form" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div className="modal-dialog modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header border-bottom-0">
//                 <h5 className="modal-title" id="modal-title">Add Training</h5>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModal}></button>
//               </div>
//               <form id="myForm" onSubmit={handleSubmit}>
//                 <div className="modal-body">
//                   <div className="alert alert-danger" role="alert" id="danger-alert" style={{ display: 'none' }}>
//                     End time should be greater than start time.
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="event-title">Training Name <span className="text-danger">*</span></label>
//                     <input 
//                       type="text" 
//                       className="form-control" 
//                       value={formData.eventName} 
//                       onChange={(e) => setFormData({ ...formData, eventName: e.target.value })} 
//                       placeholder="Enter training name" 
//                       required 
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="training-date">Training Date <span className="text-danger">*</span></label>
//                     <input 
//                       type="date" 
//                       className="form-control" 
//                       value={formData.trainingDate} 
//                       onChange={(e) => setFormData({ ...formData, trainingDate: e.target.value })} 
//                       placeholder="training-date" 
//                       min={new Date().toISOString().split('T')[0]} 
//                       required 
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="start-time">Start Time <span className="text-danger">*</span></label>
//                     <input 
//                       type="time" 
//                       className="form-control" 
//                       value={formData.startTime} 
//                       onChange={(e) => setFormData({ ...formData, startTime: e.target.value })} 
//                       placeholder="start-time" 
//                       min="09:00" 
//                       max="18:00" 
//                       required 
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="end-time">End Time <span className="text-danger">*</span></label>
//                     <input 
//                       type="time" 
//                       className="form-control" 
//                       value={formData.endTime} 
//                       onChange={(e) => setFormData({ ...formData, endTime: e.target.value })} 
//                       placeholder="end-time" 
//                       min="09:00" 
//                       max="18:00" 
//                       required 
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="trainer-name">Trainer Name</label>
//                     <input 
//                       type="text" 
//                       className="form-control" 
//                       value={formData.trainerName} 
//                       onChange={(e) => setFormData({ ...formData, trainerName: e.target.value })} 
//                       placeholder="Enter trainer name" 
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="scheduled-by">Scheduled By</label>
//                     <input 
//                       type="text" 
//                       className="form-control" 
//                       value={formData.scheduledBy} 
//                       onChange={(e) => setFormData({ ...formData, scheduledBy: e.target.value })} 
//                       placeholder="Enter scheduled by" 
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="scheduled-to">Scheduled To</label>
//                     <input 
//                       type="text" 
//                       className="form-control" 
//                       value={formData.scheduledTo} 
//                       onChange={(e) => setFormData({ ...formData, scheduledTo: e.target.value })} 
//                       placeholder="Enter scheduled to" 
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="event-color">Color</label>
//                     <input 
//                       type="color" 
//                       className="form-control" 
//                       value={formData.eventColor} 
//                       onChange={(e) => setFormData({ ...formData, eventColor: e.target.value })} 
//                     />
//                   </div>
//                 </div>
//                 <div className="modal-footer border-top-0 d-flex justify-content-center">
//                   <button type="submit" className="btn btn-success" id="submit-button">Submit</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}

//       {showTrainingDetailsModal && (
//         <div className="modal fade edit-form" id="edit-form" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div className="modal-dialog modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header border-bottom-0">
//                 <h5 className="modal-title" id="modal-title">Edit Training</h5>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCancel}></button>
//               </div>
//               <form id="myForm">
//                 <div className="modal-body">
//                   <div className="form-group">
//                     <label htmlFor="event-title-edit">Training Name <span className="text-danger">*</span></label>
//                     <input 
//                       type="text" 
//                       className="form-control" 
//                       value={formData.eventName} 
//                       onChange={(e) => setFormData({ ...formData, eventName: e.target.value })} 
//                       placeholder="Enter training name" 
//                       required 
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="start-date-edit">Training Date <span className="text-danger">*</span></label>
//                     <input 
//                       type="date" 
//                       className="form-control" 
//                       value={formData.trainingDate} 
//                       onChange={(e) => setFormData({ ...formData, trainingDate: e.target.value })} 
//                       placeholder="start-date" 
//                       min={new Date().toISOString().split('T')[0]} 
//                       required 
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="start-time-edit">Start Time <span className="text-danger">*</span></label>
//                     <input 
//                       type="time" 
//                       className="form-control" 
//                       value={formData.startTime} 
//                       onChange={(e) => setFormData({ ...formData, startTime: e.target.value })} 
//                       placeholder="start-time" 
//                       min="09:00" 
//                       max="18:00" 
//                       required 
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="end-time-edit">End Time <span className="text-danger">*</span></label>
//                     <input 
//                       type="time" 
//                       className="form-control" 
//                       value={formData.endTime} 
//                       onChange={(e) => setFormData({ ...formData, endTime: e.target.value })} 
//                       placeholder="end-time" 
//                       min="09:00" 
//                       max="18:00" 
//                       required 
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="trainer-name-edit">Trainer Name</label>
//                     <input 
//                       type="text" 
//                       className="form-control" 
//                       value={formData.trainerName} 
//                       onChange={(e) => setFormData({ ...formData, trainerName: e.target.value })} 
//                       placeholder="Enter trainer name" 
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="scheduled-by-edit">Scheduled By</label>
//                     <input 
//                       type="text" 
//                       className="form-control" 
//                       value={formData.scheduledBy} 
//                       onChange={(e) => setFormData({ ...formData, scheduledBy: e.target.value })} 
//                       placeholder="Enter scheduled by" 
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="scheduled-to-edit">Scheduled To</label>
//                     <input 
//                       type="text" 
//                       className="form-control" 
//                       value={formData.scheduledTo} 
//                       onChange={(e) => setFormData({ ...formData, scheduledTo: e.target.value })} 
//                       placeholder="Enter scheduled to" 
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="event-color-edit">Color</label>
//                     <input 
//                       type="color" 
//                       className="form-control" 
//                       value={formData.eventColor} 
//                       onChange={(e) => setFormData({ ...formData, eventColor: e.target.value })} 
//                     />
//                   </div>
//                 </div>
//                 <div className="modal-footer border-top-0 d-flex justify-content-center">
//                   <button type="button" className="btn btn-secondary" onClick={handleDelete}>Delete Training</button>
//                   <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyCalendar;





import React, { useEffect, useState } from 'react';
import './styles/style.css';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';

const MyCalendar = () => {
  const [showModal, setShowModal] = useState(false);
  const [calendar, setCalendar] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showTrainingDetailsModal, setShowTrainingDetailsModal] = useState(false);
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    eventName: '',
    trainingDate: '',
    startTime: '',
    endTime: '',
    trainerName: '',
    scheduledBy: '',
    scheduledTo: '',
    eventColor: '#3788d8' // default color
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/events');
        const fetchedEvents = response.data.map(event => ({
          id: event.t_id,
          title: event.TrainingName,
          start: event.TrainingDate + 'T' + event.startTime,
          end: event.TrainingDate + 'T' + event.endTime,
          extendedProps: {
            trainerName: event.TrainerName,
            scheduledBy: event.ScheduledBy,
            scheduledTo: event.ScheduledTo
          }
        }));
        setEvents(fetchedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();

    const calendarEl = document.getElementById('calendar');
    const newCalendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      events: events,
      eventClick: handleEventClick
    });
    newCalendar.render();
    setCalendar(newCalendar);
  }, []);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if training already scheduled for the selected date
    const existingEvent = events.find(event => event.start === formData.trainingDate);
    if (existingEvent) {
      alert('Training already scheduled for this date');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/training', formData);

      const newEvent = {
        id: response.data.t_id,
        title: formData.eventName,
        start: formData.trainingDate + 'T' + formData.startTime,
        end: formData.trainingDate + 'T' + formData.endTime,
        color: formData.eventColor,
        extendedProps: {
          trainerName: formData.trainerName,
          scheduledBy: formData.scheduledBy,
          scheduledTo: formData.scheduledTo
        }
      };
      setEvents([...events, newEvent]);

      if (calendar) {
        calendar.addEvent(newEvent);
        calendar.refetchEvents();
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setShowModal(false);
  };

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setShowTrainingDetailsModal(true);
  };

  const handleDelete = async () => {
    if (selectedEvent) {
      try {
        await axios.delete(`http://localhost:3001/api/training/${selectedEvent.id}`);
        selectedEvent.remove();
        setShowTrainingDetailsModal(false);
        setEvents(events.filter(event => event.id !== selectedEvent.id)); // Remove the event from events state
        setSelectedEvent(null); // Clear selectedEvent state
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  
  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3001/api/training/${selectedEvent.id}`, formData);
      
      selectedEvent.setExtendedProp('trainerName', formData.trainerName);
      selectedEvent.setExtendedProp('scheduledBy', formData.scheduledBy);
      selectedEvent.setExtendedProp('scheduledTo', formData.scheduledTo);
      selectedEvent.setProp('title', formData.eventName);
      selectedEvent.setStart(formData.trainingDate + 'T' + formData.startTime);
      selectedEvent.setEnd(formData.trainingDate + 'T' + formData.endTime);
      selectedEvent.setProp('color', formData.eventColor);
      
      calendar.refetchEvents();
    } catch (error) {
      console.error('Error:', error);
    }

    setShowTrainingDetailsModal(false);
  };
  
  const handleCancel = () => {
    setShowTrainingDetailsModal(false);
  };

  return (
    <div>
      <header className="cd__intro">
        <div className="cd__action">
          <h1>Training Schedule</h1>
          <button className="btn btn-primary" onClick={handleModal}>Add Training</button>
        </div>
      </header>

      <main className="cd__main">
        <div id='calendar'></div>
      </main>

      {showModal && (
        <div className="modal fade edit-form" id="form" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header border-bottom-0">
                <h5 className="modal-title" id="modal-title">Add Training</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModal}></button>
              </div>
              <form id="myForm" onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="alert alert-danger" role="alert" id="danger-alert" style={{ display: 'none' }}>
                    End time should be greater than start time.
                  </div>
                  <div className="form-group">
                    <label htmlFor="event-title">Training Name <span className="text-danger">*</span></label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.eventName} 
                      onChange={(e) => setFormData({ ...formData, eventName: e.target.value })} 
                      placeholder="Enter training name" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="training-date">Training Date <span className="text-danger">*</span></label>
                    <input 
                      type="date" 
                      className="form-control" 
                      value={formData.trainingDate} 
                      onChange={(e) => setFormData({ ...formData, trainingDate: e.target.value })} 
                      placeholder="training-date" 
                      min={new Date().toISOString().split('T')[0]} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="start-time">Start Time <span className="text-danger">*</span></label>
                    <input 
                      type="time" 
                      className="form-control" 
                      value={formData.startTime} 
                      onChange={(e) => setFormData({ ...formData, startTime: e.target.value })} 
                      placeholder="start-time" 
                      min="09:00" 
                      max="18:00" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="end-time">End Time <span className="text-danger">*</span></label>
                    <input 
                      type="time" 
                      className="form-control" 
                      value={formData.endTime} 
                      onChange={(e) => setFormData({ ...formData, endTime: e.target.value })} 
                      placeholder="end-time" 
                      min="09:00" 
                      max="18:00" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="trainer-name">Trainer Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.trainerName} 
                      onChange={(e) => setFormData({ ...formData, trainerName: e.target.value })} 
                      placeholder="Enter trainer name" 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="scheduled-by">Scheduled By</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.scheduledBy} 
                      onChange={(e) => setFormData({ ...formData, scheduledBy: e.target.value })} 
                      placeholder="Enter scheduled by" 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="scheduled-to">Scheduled To</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.scheduledTo} 
                      onChange={(e) => setFormData({ ...formData, scheduledTo: e.target.value })} 
                      placeholder="Enter scheduled to" 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="event-color">Color</label>
                    <input 
                      type="color" 
                      className="form-control" 
                      value={formData.eventColor} 
                      onChange={(e) => setFormData({ ...formData, eventColor: e.target.value })} 
                    />
                  </div>
                </div>
                <div className="modal-footer border-top-0 d-flex justify-content-center">
                  <button type="submit" className="btn btn-success" id="submit-button">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showTrainingDetailsModal && (
        <div className="modal fade edit-form" id="edit-form" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header border-bottom-0">
                <h5 className="modal-title" id="modal-title">Edit Training</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCancel}></button>
              </div>
              <form id="myForm">
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="event-title-edit">Training Name <span className="text-danger">*</span></label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.eventName} 
                      onChange={(e) => setFormData({ ...formData, eventName: e.target.value })} 
                      placeholder="Enter training name" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="start-date-edit">Training Date <span className="text-danger">*</span></label>
                    <input 
                      type="date" 
                      className="form-control" 
                      value={formData.trainingDate} 
                      onChange={(e) => setFormData({ ...formData, trainingDate: e.target.value })} 
                      placeholder="start-date" 
                      min={new Date().toISOString().split('T')[0]} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="start-time-edit">Start Time <span className="text-danger">*</span></label>
                    <input 
                      type="time" 
                      className="form-control" 
                      value={formData.startTime} 
                      onChange={(e) => setFormData({ ...formData, startTime: e.target.value })} 
                      placeholder="start-time" 
                      min="09:00" 
                      max="18:00" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="end-time-edit">End Time <span className="text-danger">*</span></label>
                    <input 
                      type="time" 
                      className="form-control" 
                      value={formData.endTime} 
                      onChange={(e) => setFormData({ ...formData, endTime: e.target.value })} 
                      placeholder="end-time" 
                      min="09:00" 
                      max="18:00" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="trainer-name-edit">Trainer Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.trainerName} 
                      onChange={(e) => setFormData({ ...formData, trainerName: e.target.value })} 
                      placeholder="Enter trainer name" 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="scheduled-by-edit">Scheduled By</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.scheduledBy} 
                      onChange={(e) => setFormData({ ...formData, scheduledBy: e.target.value })} 
                      placeholder="Enter scheduled by" 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="scheduled-to-edit">Scheduled To</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.scheduledTo} 
                      onChange={(e) => setFormData({ ...formData, scheduledTo: e.target.value })} 
                      placeholder="Enter scheduled to" 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="event-color-edit">Color</label>
                    <input 
                      type="color" 
                      className="form-control" 
                      value={formData.eventColor} 
                      onChange={(e) => setFormData({ ...formData, eventColor: e.target.value })} 
                    />
                  </div>
                </div>
                <div className="modal-footer border-top-0 d-flex justify-content-center">
                  <button type="button" className="btn btn-secondary" onClick={handleDelete}>Delete Training</button>
                  <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCalendar;


