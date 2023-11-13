// EventList.js

import React, { useState, useEffect } from 'react';
import StaffNavBar from '../dashboard/staffNavBar';
import axios from 'axios'
const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events when the component mounts
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      // Make the API request to fetch events using Axios
      const response = await axios.get('http://localhost:8800/get-events');
      
      // Check if the request was successful (status code 2xx)
      if (response.status === 200) {
        // Access the response data directly
        const result = response.data;
        console.log('Parsed JSON result:', result);
        setEvents(result.events);
      } else {
        // Handle errors (status code is not in the 2xx range)
        console.error('Error fetching events:', response);
      }
    } catch (error) {
      console.error('Error fetching events:', error.message);
    }
  };
  

  return (
    <div>
      <StaffNavBar />
      <h2>Event List</h2>
      <div className="event-container">
      {events.map((event) => (
  <div key={event[0]} className="event-card">
    {/* Assuming you have an 'image' property in your event data */}
    <img src={event[4]} alt={event[1]} className="event-image" />
    <div className="event-details">
      <h3 className="event-title">{event[1]}</h3>
      <p className="event-date-time">
        Date: {new Date(event[2]).toLocaleDateString()}, Time: {new Date(event[2]).toLocaleTimeString()}
      </p>
    </div>
  </div>
))}
      </div>
    </div>
  );
};

export default EventList;
