// StaffNavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles.css'

function StaffNavBar() {
  return (
    <nav className="dashboard-nav">
      <ul>
      <li>
          <Link to="/dashboard">Home</Link>
        </li>
        <li>
          <Link to="/create-event">Create Event</Link>
        </li>
        
        <li>
          <Link to="/tickets">Tickets</Link>
        </li>
        <li>
          <Link to="/event-list">Events</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
        {/* Add more navigation links for staff as needed */}
      </ul>
    </nav>
  );
}

export default StaffNavBar;
