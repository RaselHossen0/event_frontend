import React, { useState, useEffect } from 'react';
import '../../../styles.css'; // Import the CSS file
import NavBar from '../dashboard/navbar';

const MyTickets = () => {
  // Define state to store user's ticket data
  const [userTickets, setUserTickets] = useState([]);

  // Simulate fetching user ticket data from a database (dummy data for now)
  useEffect(() => {
    // Replace this with a database query in the future
    const dummyTicketData = [
      {
        id: 1,
        eventName: 'Sample Event 1',
        eventDate: '2023-11-15',
        eventTime: '18:00',
        ticketCode: 'ABC123',
      },
      {
        id: 2,
        eventName: 'Sample Event 2',
        eventDate: '2023-12-05',
        eventTime: '19:30',
        ticketCode: 'XYZ456',
      },
      // Add more dummy ticket data
    ];
    setUserTickets(dummyTicketData);
  }, []);

  return (
    <div className="my-tickets-container">
      <NavBar/>
      <h2>My Tickets</h2>
      {userTickets.length === 0 ? (
        <p>No tickets found.</p>
      ) : (
        <ul className="ticket-list">
          {userTickets.map((ticket) => (
            <li key={ticket.id} className="ticket-item">
              <div className="ticket-event-name">
                <strong>{ticket.eventName}</strong>
              </div>
              <div className="ticket-event-details">
                Date: {ticket.eventDate}, Time: {ticket.eventTime}
              </div>
              <div className="ticket-code">
                Ticket Code: {ticket.ticketCode}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyTickets;
