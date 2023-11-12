

import React from 'react';
import StaffNavBar from '../dashboard/staffNavBar';

function CreateEvent() {
  return (
    <div className="CreateEvent">
      <StaffNavBar/>
      <h1>Create Event</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Event Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter event name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Event Date:</label>
          <input
            type="date"
            id="date"
            name="date"
          />
        </div>
        <button type="submit" className="btn">Create Event</button>
      </form>
    </div>
  );
}

export default CreateEvent;
