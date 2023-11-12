import React, { useState } from 'react';
import './MyEvents.css';

function EventDetails() {
  const [isLoved, setLoved] = useState(false);
  const ticketsLeft = 50; // Replace with actual number of tickets left

  const handleLoveClick = () => {
    setLoved(!isLoved);
  };

  return (
    <div className="event-details">
      <h1>Event Name</h1>
      <img
        src="event-image.jpg" 
        alt="Event"
        className="event-image"
      />
      <p>Date: July 15, 2023</p>
      <p>Time: 7:00 PM - 10:00 PM</p>
      <p>Location: Event Venue</p>
      <p>Tickets Left: {ticketsLeft}</p>

      <button className={isLoved ? 'loved-button' : 'love-button'} onClick={handleLoveClick}>
        {isLoved ? 'Loved' : 'Love'}
      </button>

      <button className="buy-ticket-button" onClick={handleBuyTicketClick}>
        Buy Ticket
      </button>
    </div>
  );
}

export default EventDetails;
