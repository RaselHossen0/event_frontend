import React, { useState, useEffect } from 'react';
import './MyEvents.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import NavBar from '../dashboard/navbar';

const MyEvents = () => {
  // Define state to store user's event data
  const [userEvents, setUserEvents] = useState([]);

  // Simulate fetching user event data from a database (dummy data for now)
  useEffect(() => {
    // Replace this with a database query in the future
    const dummyEventData = [
      {
        id: 1,
        eventName: 'Sample Event 1',
        eventDate: '2023-11-15',
        eventTime: '18:00',
        location: 'Sample Venue 1',
      },
      {
        id: 2,
        eventName: 'Sample Event 2',
        eventDate: '2023-12-05',
        eventTime: '19:30',
        location: 'Sample Venue 2',
      },
      // Add more dummy event data
    ];
    setUserEvents(dummyEventData);
  }, []);

  return (
    <div className="my-events-container">
      <NavBar/>
      <h2>My Events</h2>
      {userEvents.length === 0 ? (
  <p>No events found.</p>
) : (
  <ul className="event-list">
    {userEvents.map((event) => (
      <li key={event.id} className="event-item">
        <Link to={`/event-details/${event.id}`}> {/* Add the Link component */}
          <div className="event-name">
            <strong>{event.eventName}</strong>
          </div>
          <div className="event-details">
            Date: {event.eventDate}, Time: {event.eventTime}
          </div>
          <div className="event-location">
            Location: {event.location}
          </div>
        </Link>
      </li>
    ))}
  </ul>
)}

    </div>
  );
};

export default MyEvents;
