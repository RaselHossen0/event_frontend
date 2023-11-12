// EventList.js

import React from 'react';
import Event from './event'; // Import the Event model class
import StaffNavBar from '../dashboard/staffNavBar';
const dummyEventData = [
    new Event(1, 'Event 1', '2023-11-01', '10:00 AM', 'event1.jpg'),
    new Event(2, 'Event 2', '2023-11-05', '2:30 PM', 'event2.jpg'),

  ];
  

const EventList = () => {
  return (
    <div>
      <StaffNavBar/>
      <h2>Event List</h2>
      <div className="event-container">
        {dummyEventData.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date-time">
                Date: {event.startDate}, Time: {event.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
