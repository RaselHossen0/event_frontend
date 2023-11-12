import React, { useState, useEffect } from 'react';
import '../../../styles.css';

import NavBar from './navbar';

function UserDashboard() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  // Simulate fetching upcoming events from a database (dummy data for now)
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
      // Add more dummy event data with future dates
    ];

    const today = new Date();

    // Filter events with dates after today
    const upcomingEventsData = dummyEventData.filter(
      (event) => new Date(event.eventDate) > today
    );

    setUpcomingEvents(upcomingEventsData);
  }, []);

  return (
    <div className="dashboard">
      <NavBar/>
     

      {/* Display Upcoming Events section */}
      <div className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="event-list-horizontal">
          {upcomingEvents.length === 0 ? (
            <p>No upcoming events found.</p>
          ) : (
            upcomingEvents.map((event) => (
              <div key={event.id} className="event-item-horizontal">
                <div className="event-name">
                  <strong>{event.eventName}</strong>
                </div>
                <div className="event-details">
                  Date: {event.eventDate}, Time: {event.eventTime}
                </div>
                <div className="event-location">
                  Location: {event.location}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
