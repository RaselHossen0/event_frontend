// Dashboard.js

import React from 'react';
import '../../../styles.css';

import StaffNavBar from './staffNavBar';
function Dashboard() {
    return (
      <div className="dashboard">
        <StaffNavBar/>
        <h1>Staff Dashboard</h1>
        <div className="button-container">
          <button  onClick={handleAverageAge}>
            Average Age of Attendees
          </button>
          <button  onClick={handlePopularCategories}>
            Popular Event Categories
          </button>
          <button  onClick={handleTotalRevenue}>
            Total Revenue
          </button>
          <button  onClick={handleHighRatingEvents}>
            High Rating Events
          </button>
        </div>
        <div className="result-container">
          <p>Average Age of Attendees: 28 years</p>
          <p>Popular Event Categories: Category A, Category B, Category C</p>
          <p>Total Revenue: $50,000</p>
          <p>High Rating Events: Event 1, Event 2</p>
        </div>
      </div>
    );
  }
  

function handleAverageAge() {
  // Implement the logic for calculating and displaying average age (dummy value)
}

function handlePopularCategories() {
  // Implement the logic for displaying popular event categories (dummy value)
}

function handleTotalRevenue() {
  // Implement the logic for calculating and displaying total revenue (dummy value)
}

function handleHighRatingEvents() {
  // Implement the logic for displaying high-rating events (dummy value)
}

export default Dashboard;
