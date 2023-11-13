import React, { useState } from 'react';
import StaffNavBar from '../dashboard/staffNavBar';

function CreateEvent() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Creating Event');
    try {
      // Make the API request to create an event
      const response = await fetch('http://localhost:8800/create-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventName,
          eventDate,
          eventLocation,
          eventDescription,
        }),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        const result = await response.json();
        console.log(result); // Handle the response accordingly
      } else {
        // Handle errors (status code is not in the 2xx range)
        console.error('Error creating event:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating event:', error.message);
    }
  };

  return (
    <div className="CreateEvent">
      <StaffNavBar />
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Event Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter event name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Event Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Event Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter event location"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Event Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter event description"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Create Event
        </button>
      </form>
    </div>
  );
}

export default CreateEvent;
