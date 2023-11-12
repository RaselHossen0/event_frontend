// NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './../../../styles.css';

function NavBar() {
  return (
    <nav className="dashboard-nav">
      <ul>
        <li>
          <Link to="/user-dashboard" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/user-events" className="nav-link">
            My Events
          </Link>
        </li>
        <li>
          <Link to="/user-tickets" className="nav-link">
            My Tickets
          </Link>
        </li>
        <li>
          <Link to="/user-profile" className="nav-link">
            My Profile
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            Logout
          </Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default NavBar;
