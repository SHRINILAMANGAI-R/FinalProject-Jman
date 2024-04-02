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


import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelect = ({ start, end }) => {
    const input = window.prompt(
      `Enter event details separated by semicolon (;):
      Training Name;Training Date (YYYY-MM-DD);Training Start Time (HH:mm);Training End Time (HH:mm);Trainer Name;Scheduled To;Scheduled By:`
    );

    if (input) {
      const [
        trainingName,
        trainingDate,
        trainingStartTime,
        trainingEndTime,
        trainerName,
        scheduledTo,
        scheduledBy
      ] = input.split(';');

      const newEvent = {
        start,
        end,
        trainingName: trainingName.trim(),
        trainingDate: trainingDate.trim(),
        trainingStartTime: trainingStartTime.trim(),
        trainingEndTime: trainingEndTime.trim(),
        trainerName: trainerName.trim(),
        scheduledTo: scheduledTo.trim(),
        scheduledBy: scheduledBy.trim()
      };

      setEvents([...events, newEvent]);
    }
  };

  return (
    <div style={{ height: '90vh' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultDate={new Date()}
        onSelectSlot={handleSelect}
        selectable
      />
    </div>
  );
};

export default MyCalendar;
