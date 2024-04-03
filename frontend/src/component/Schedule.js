// import React, { useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// const MyCalendar = () => {
//   const [events, setEvents] = useState([]);

//   const handleSelect = ({ start, end }) => {
//     const input = window.prompt(
//       `Enter event details:
//       Training Name:
//       Training Date (YYYY-MM-DD):
//       Training Start Time (HH:mm):
//       Training End Time (HH:mm):
//       Trainer Name:
//       Scheduled To:
//       Scheduled By:`
//     );
//     if (input) {
//       const [
//         trainingName,
//         trainingDate,
//         trainingStartTime,
//         trainingEndTime,
//         trainerName,
//         scheduledTo,
//         scheduledBy
//       ] = input.split('\n');
//       const newEvent = {
//         start,
//         end,
//         trainingName: trainingName.trim(),
//         trainingDate: trainingDate.trim(),
//         trainingStartTime: trainingStartTime.trim(),
//         trainingEndTime: trainingEndTime.trim(),
//         trainerName: trainerName.trim(),
//         scheduledTo: scheduledTo.trim(),
//         scheduledBy: scheduledBy.trim()
//       };
  
//       setEvents([...events, newEvent]);
//     }
//   };

//   return (
//     <div style={{ height: '90vh' }}>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         defaultDate={new Date()}
//         onSelectSlot={handleSelect}
//         selectable
//       />
//     </div>
//   );
// };

// export default MyCalendar;


// import React, { useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// const MyCalendar = () => {
//   const [events, setEvents] = useState([]);

//   const handleSelect = ({ start, end }) => {
//     const input = window.prompt(
//       `Enter event details separated by semicolon (;):
//       Training Name;Training Date (YYYY-MM-DD);Training Start Time (HH:mm);Training End Time (HH:mm);Trainer Name;Scheduled To;Scheduled By:`
//     );

//     if (input) {
//       const [
//         trainingName,
//         trainingDate,
//         trainingStartTime,
//         trainingEndTime,
//         trainerName,
//         scheduledTo,
//         scheduledBy
//       ] = input.split(';');

//       const newEvent = {
//         start,
//         end,
//         trainingName: trainingName.trim(),
//         trainingDate: trainingDate.trim(),
//         trainingStartTime: trainingStartTime.trim(),
//         trainingEndTime: trainingEndTime.trim(),
//         trainerName: trainerName.trim(),
//         scheduledTo: scheduledTo.trim(),
//         scheduledBy: scheduledBy.trim()
//       };

//       setEvents([...events, newEvent]);
//     }
//   };

//   return (
//     <div style={{ height: '90vh' }}>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         defaultDate={new Date()}
//         onSelectSlot={handleSelect}
//         selectable
//       />
//     </div>
//   );
// };

// export default MyCalendar;




// import React from 'react';
// import './styles/style.css'; // Importing styles.css
// import './styles/demo.css'; // Importing demo.css

// const MyCalendar = () => {
//   return (
//     <div>
//       <header className="cd__intro">
//         <div className="cd__action">
//           <h1>Training Schedule</h1>
//         </div>
//       </header>

//       <main className="cd__main">
//         <div id='calendar'></div>

//         <div className="modal fade edit-form" id="form" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div className="modal-dialog modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header border-bottom-0">
//                 <h5 className="modal-title" id="modal-title">Add Event</h5>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <form id="myForm">
//                 <div className="modal-body">
//                   <div className="alert alert-danger " role="alert" id="danger-alert" style={{ display: 'none' }}>
//                     End date should be greater than start date.
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="event-title">Event name <span className="text-danger">*</span></label>
//                     <input type="text" className="form-control" id="event-title" placeholder="Enter event name" required />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="start-date">Start date <span className="text-danger">*</span></label>
//                     <input type="date" className="form-control" id="start-date" placeholder="start-date" required />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="end-date">End date - <small className="text-muted">Optional</small></label>
//                     <input type="date" className="form-control" id="end-date" placeholder="end-date" />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="event-color">Color</label>
//                     <input type="color" className="form-control" id="event-color" defaultValue="#3788d8" />
//                   </div>
//                 </div>
//                 <div className="modal-footer border-top-0 d-flex justify-content-center">
//                   <button type="submit" className="btn btn-success" id="submit-button">Submit</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//         <div className="modal fade" id="delete-modal" tabIndex="-1" role="dialog" aria-labelledby="delete-modal-title" aria-hidden="true">
//           <div className="modal-dialog modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="delete-modal-title">Confirm Deletion</h5>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <div className="modal-body text-center" id="delete-modal-body">
//                 Are you sure you want to delete the event?
//               </div>
//               <div className="modal-footer border-0">
//                 <button type="button" className="btn btn-secondary rounded-sm" data-dismiss="modal" id="cancel-button">Cancel</button>
//                 <button type="button" className="btn btn-danger rounded-lg" id="delete-button">Delete</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

      
//     </div>
//   );
// };

//export default MyCalendar;







// import React, { useEffect } from 'react';
// import './styles/style.css'; // Importing styles.css
// import './styles/demo.css'; // Importing demo.css
// import { Calendar } from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';

// const MyCalendar = () => {
//   useEffect(() => {
//     const calendarEl = document.getElementById('calendar');
//     const calendar = new Calendar(calendarEl, {
//       plugins: [dayGridPlugin],
//       initialView: 'dayGridMonth' // Set initial view to month view
//     });
//     calendar.render(); // Render the calendar
//   }, []); // Ensure this effect runs only once after initial render

//   return (
//     <div>
//       <header className="cd__intro">
//         <div className="cd__action">
//           <h1>Training Schedule</h1>
//         </div>
//       </header>

//       <main className="cd__main">
//         <div id='calendar'></div>
//         {/* Modal and other components */}
//       </main>
//     </div>
//   );
// };

// export default MyCalendar;








// import React, { useState, useEffect } from 'react';
// import { Calendar } from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';

// const MyCalendar = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [trainingDetails, setTrainingDetails] = useState({
//     trainingName: '',
//     trainingDate: '',
//     trainingStartTime: '',
//     trainingEndTime: '',
//     trainerName: '',
//     scheduledTo: '',
//     scheduledBy: ''
//   });

//   const handleModal = () => {
//     setShowModal(!showModal);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setTrainingDetails({
//       ...trainingDetails,
//       [name]: value
//     });
//   };

//   useEffect(() => {
//     const calendarEl = document.getElementById('calendar');
//     const calendar = new Calendar(calendarEl, {
//       plugins: [dayGridPlugin],
//       initialView: 'dayGridMonth' // Set initial view to month view
//     });
//     calendar.render(); // Render the calendar
//   }, []); // Ensure this effect runs only once after initial render

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add code to handle submission of training details and add event to the calendar
//     // You can use the trainingDetails state to access the input values
//     console.log(trainingDetails);
//     setShowModal(false); // Close the modal after submission
//   };

//   return (
//     <div>
//       <header className="cd__intro">
//         <div className="cd__action">
//           <h1>Training Schedule</h1>
//           <button className="btn btn-primary" onClick={handleModal}>Add Training Event</button>
//         </div>
//       </header>

//       <main className="cd__main">
//         <div id='calendar'></div>
        
//         {/* Modal */}
//         {showModal && (
//           <div className="modal fade edit-form" id="form" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div className="modal-dialog modal-dialog" role="document">
//               <div className="modal-content">
//                 <div className="modal-header border-bottom-0">
//                   <h5 className="modal-title" id="modal-title">Add Event</h5>
//                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModal}></button>
//                 </div>
//                 <form id="myForm" onSubmit={handleSubmit}>
//                   <div className="modal-body">
//                     {/* Input fields for training details */}
//                     {/* Example: */}
//                     <div className="form-group">
//                       <label htmlFor="trainingName">Training Name</label>
//                       <input type="text" className="form-control" id="trainingName" name="trainingName" value={trainingDetails.trainingName} onChange={handleInputChange} required />
//                     </div>
//                     {/* Add more input fields for other training details */}
//                   </div>
//                   <div className="modal-footer border-top-0 d-flex justify-content-center">
//                     <button type="submit" className="btn btn-success" id="submit-button">Submit</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default MyCalendar;




// import React, { useEffect, useState } from 'react';
// import './styles/style.css';
// import './styles/demo.css';
// import { Calendar } from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';

// const MyCalendar = () => {
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const calendarEl = document.getElementById('calendar');
//     const calendar = new Calendar(calendarEl, {
//       plugins: [dayGridPlugin],
//       initialView: 'dayGridMonth' // Set initial view to month view
//     });
//     calendar.render(); // Render the calendar
//   }, []); // Ensure this effect runs only once after initial render

//   const handleModal = () => {
//     setShowModal(!showModal);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Get event details from the form
//     const eventName = document.getElementById('event-title').value;
//     const startDate = document.getElementById('start-date').value;
//     const endDate = document.getElementById('end-date').value;
//     const eventColor = document.getElementById('event-color').value;

//     // Add the event to the calendar
//     const calendar = document.getElementById('calendar').getCalendar();
//     calendar.addEvent({
//       title: eventName,
//       start: startDate,
//       end: endDate,
//       color: eventColor
//     });

//     // Close the modal
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <header className="cd__intro">
//         <div className="cd__action">
//           <h1>Training Schedule</h1>
//           <button className="btn btn-primary" onClick={handleModal}>Add Training Event</button>
//         </div>
//       </header>

//       <main className="cd__main">
//         <div id='calendar'></div>

//         {/* Modal */}
//         {showModal && (
//           <div className="modal fade edit-form" id="form" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div className="modal-dialog modal-dialog" role="document">
//               <div className="modal-content">
//                 <div className="modal-header border-bottom-0">
//                   <h5 className="modal-title" id="modal-title">Add Event</h5>
//                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModal}></button>
//                 </div>
//                 <form id="myForm" onSubmit={handleSubmit}>
//                   <div className="modal-body">
//                     <div className="alert alert-danger" role="alert" id="danger-alert" style={{ display: 'none' }}>
//                       End date should be greater than start date.
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="event-title">Event name <span className="text-danger">*</span></label>
//                       <input type="text" className="form-control" id="event-title" placeholder="Enter event name" required />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="start-date">Start date <span className="text-danger">*</span></label>
//                       <input type="date" className="form-control" id="start-date" placeholder="start-date" required />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="end-date">End date - <small className="text-muted">Optional</small></label>
//                       <input type="date" className="form-control" id="end-date" placeholder="end-date" />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="event-color">Color</label>
//                       <input type="color" className="form-control" id="event-color" defaultValue="#3788d8" />
//                     </div>
//                   </div>
//                   <div className="modal-footer border-top-0 d-flex justify-content-center">
//                     <button type="submit" className="btn btn-success" id="submit-button">Submit</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Delete Confirmation Modal */}
//         <div className="modal fade" id="delete-modal" tabIndex="-1" role="dialog" aria-labelledby="delete-modal-title" aria-hidden="true">
//           <div className="modal-dialog modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="delete-modal-title">Confirm Deletion</h5>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <div className="modal-body text-center" id="delete-modal-body">
//                 Are you sure you want to delete the event?
//               </div>
//               <div className="modal-footer border-0">
//                 <button type="button" className="btn btn-secondary rounded-sm" data-dismiss="modal" id="cancel-button">Cancel</button>
//                 <button type="button" className="btn btn-danger rounded-lg" id="delete-button">Delete</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MyCalendar;



// import React, { useEffect, useState } from 'react';
// import './styles/style.css';
// import './styles/demo.css';
// import { Calendar } from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';

// const MyCalendar = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [calendar, setCalendar] = useState(null); // State to store the calendar instance
//   const [selectedEvent, setSelectedEvent] = useState(null); // State to store the selected event

//   useEffect(() => {
//     const calendarEl = document.getElementById('calendar');
//     const newCalendar = new Calendar(calendarEl, {
//       plugins: [dayGridPlugin],
//       initialView: 'dayGridMonth', // Set initial view to month view
//       eventClick: handleEventClick // Attach eventClick callback
//     });
//     newCalendar.render(); // Render the calendar
//     setCalendar(newCalendar); // Store the calendar instance in state
//   }, []); // Ensure this effect runs only once after initial render

//   const handleModal = () => {
//     setShowModal(!showModal);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Get event details from the form
//     const eventName = document.getElementById('event-title').value;
//     const startDate = document.getElementById('start-date').value;
//     const endDate = document.getElementById('end-date').value;
//     const eventColor = document.getElementById('event-color').value;

//     // Add the event to the calendar
//     if (calendar) {
//       calendar.addEvent({
//         title: eventName,
//         start: startDate,
//         end: endDate,
//         color: eventColor
//       });
//     }

//     // Close the modal
//     setShowModal(false);
//   };

//   const handleEventClick = (info) => {
//     // Display custom confirmation modal
//     const confirmationModal = window.confirm("Do you want to edit or delete this event?");
    
//     // If user chooses to edit
//     if (confirmationModal) {
//       // Display training details modal for editing
//       setShowTrainingDetailsModal(true);
//       // Set the selected event when an event is clicked
//       setSelectedEvent(info.event); 
//     } else {
//       // Delete the event from the calendar
//       info.event.remove();
//     }
//   };
//   const handleSave = () => {
//     // Get updated event details from the form
//     const eventName = document.getElementById('event-title').value;
//     const startDate = document.getElementById('start-date').value;
//     const endDate = document.getElementById('end-date').value;
//     const eventColor = document.getElementById('event-color').value;
  
//     // Update the event details
//     selectedEvent.setProp('title', eventName);
//     selectedEvent.setStart(startDate);
//     selectedEvent.setEnd(endDate);
//     selectedEvent.setProp('color', eventColor);
  
//     // Close the modal
//     setShowTrainingDetailsModal(false);
//   };
  
//   const handleCancel = () => {
//     // Close the modal
//     setShowTrainingDetailsModal(false);
//   };
  
//   return (
//     <div>
//       <header className="cd__intro">
//         <div className="cd__action">
//           <h1>Training Schedule</h1>
//           <button className="btn btn-primary" onClick={handleModal}>Add Training Event</button>
//         </div>
//       </header>

//       <main className="cd__main">
//         <div id='calendar'></div>

//         {/* Modal */}
//         {showModal && (
//           <div className="modal fade edit-form" id="form" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div className="modal-dialog modal-dialog" role="document">
//               <div className="modal-content">
//                 <div className="modal-header border-bottom-0">
//                   <h5 className="modal-title" id="modal-title">Add Event</h5>
//                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModal}></button>
//                 </div>
//                 <form id="myForm" onSubmit={handleSubmit}>
//                   <div className="modal-body">
//                     <div className="alert alert-danger" role="alert" id="danger-alert" style={{ display: 'none' }}>
//                       End date should be greater than start date.
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="event-title">Event name <span className="text-danger">*</span></label>
//                       <input type="text" className="form-control" id="event-title" placeholder="Enter event name" required />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="start-date">Start date <span className="text-danger">*</span></label>
//                       <input type="date" className="form-control" id="start-date" placeholder="start-date" required />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="end-date">End date - <small className="text-muted">Optional</small></label>
//                       <input type="date" className="form-control" id="end-date" placeholder="end-date" />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="event-color">Color</label>
//                       <input type="color" className="form-control" id="event-color" defaultValue="#3788d8" />
//                     </div>
//                   </div>
//                   <div className="modal-footer border-top-0 d-flex justify-content-center">
//                     <button type="submit" className="btn btn-success" id="submit-button">Submit</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         )}


//       </main>
//     </div>
//   );
// };

// export default MyCalendar;


import React, { useEffect, useState } from 'react';
import './styles/style.css';
//import './styles/demo.css';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

const MyCalendar = () => {
  const [showModal, setShowModal] = useState(false);
  const [calendar, setCalendar] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showTrainingDetailsModal, setShowTrainingDetailsModal] = useState(false);

  useEffect(() => {
    const calendarEl = document.getElementById('calendar');
    const newCalendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      eventClick: handleEventClick
    });
    newCalendar.render();
    setCalendar(newCalendar);
  }, []);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const eventName = document.getElementById('event-title').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const eventColor = document.getElementById('event-color').value;

    if (calendar) {
      calendar.addEvent({
        title: eventName,
        start: startDate,
        end: endDate,
        color: eventColor
      });
    }

    setShowModal(false);
  };

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setShowTrainingDetailsModal(true);
  };

  const handleDelete = () => {
    setShowTrainingDetailsModal(false);
    if (selectedEvent) {
      selectedEvent.remove();
    }
  };

  const handleSave = () => {
    // Get event details from the form
    const eventName = document.getElementById('event-title-edit').value;
    const startDate = document.getElementById('start-date-edit').value;
    const endDate = document.getElementById('end-date-edit').value;
    const eventColor = document.getElementById('event-color-edit').value;
  
    // Update the selected event with new details
    const updatedEvent = {
      title: eventName,
      start: startDate,
      end: endDate,
      color: eventColor
    };
  
  
    // Add the updated event to the calendar
    calendar.addEvent(updatedEvent);
  
    // Close the modal
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
          <button className="btn btn-primary" onClick={handleModal}>AddTraining</button>
        </div>
      </header>

      <main className="cd__main">
        <div id='calendar'></div>

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
                      End date should be greater than start date.
                    </div>
                    <div className="form-group">
                      <label htmlFor="event-title">Event name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="event-title" placeholder="Enter event name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="start-date">Start date <span className="text-danger">*</span></label>
                      <input type="date" className="form-control" id="start-date" placeholder="start-date" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="end-date">End date - <small className="text-muted">Optional</small></label>
                      <input type="date" className="form-control" id="end-date" placeholder="end-date" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="event-color">Color</label>
                      <input type="color" className="form-control" id="event-color" defaultValue="#3788d8" />
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
                      <label htmlFor="event-title-edit">Event name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="event-title-edit" placeholder="Enter event name" defaultValue={selectedEvent ? selectedEvent.title : ''} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="start-date-edit">Start date <span className="text-danger">*</span></label>
                      <input type="date" className="form-control" id="start-date-edit" placeholder="start-date" defaultValue={selectedEvent ? selectedEvent.start : ''} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="end-date-edit">End date - <small className="text-muted">Optional</small></label>
                      <input type="date" className="form-control" id="end-date-edit" placeholder="end-date" defaultValue={selectedEvent ? selectedEvent.end : ''} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="event-color-edit">Color</label>
                      <input type="color" className="form-control" id="event-color-edit" defaultValue={selectedEvent ? selectedEvent.color : '#3788d8'} />
                    </div>
                  </div>
                  <div className="modal-footer border-top-0 d-flex justify-content-center">
                    <button type="button" className="btn btn-secondary" onClick={handleDelete}>DeleteTraining</button>
                    <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MyCalendar;
