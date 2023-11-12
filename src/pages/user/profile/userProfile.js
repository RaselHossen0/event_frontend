import React, { useState, useEffect } from 'react';
import NavBar from '../dashboard/navbar';

const UserProfile = () => {
  // Define user data state
  const [userData, setUserData] = useState({
    id: 1, // User ID (replace with actual user ID)
    username: 'john_doe',
    email: 'john@example.com',
    // Add more user information fields
  });

  // Define an edit mode state
  const [editMode, setEditMode] = useState(false);

  // Function to handle edit mode toggle
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  // Function to handle form submission when editing
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission and update user data in the database
    // You can use API calls or state management library (e.g., Redux) for this.
    toggleEditMode(); // Exit edit mode after submission
  };

  return (
    <div>
       <NavBar/>
      <h2>User Profile</h2>
      {editMode ? (
        <form onSubmit={handleFormSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={(e) => setUserData({ ...userData, username: e.target.value })}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
          </label>
          {/* Add more fields for user information */}
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
         
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          {/* Display more user information */}
        </div>
      )}
      <button onClick={toggleEditMode}>
        {editMode ? 'Cancel' : 'Edit'}
      </button>
    </div>
  );
};

export default UserProfile;
