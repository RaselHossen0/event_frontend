// TicketList.js

import React from 'react';
import Ticket from './ticket'; // Import the Ticket model class
import StaffNavBar from '../dashboard/staffNavBar';
const dummyTicketData = [
    new Ticket(1, 'Event 1', 'General Admission', 20, 100),
    new Ticket(2, 'Event 1', 'VIP', 50, 50),
    new Ticket(3, 'Event 2', 'General Admission', 25, 150),
    // Add more dummy ticket data as needed
  ];

const TicketList = () => {
  // Function to handle selling tickets
  const handleSellTicket = (ticket, quantity) => {
    ticket.sellTicket(quantity);
    // You can add logic to update the sold tickets in your database
  };

  return (
    <div>
      <StaffNavBar />
      <h2>Ticket List</h2>
      <div className="ticket-container">
        {dummyTicketData.map((ticket) => (
          <div key={ticket.ticketId} className="ticket-card">
            <div className="ticket-details">
              <h3 className="event-name">{ticket.eventName}</h3>
              <p className="ticket-type">Type: {ticket.ticketType}</p>
              <p className="ticket-price">Price: ${ticket.price}</p>
              <p className="ticket-quantity">Quantity Available: {ticket.quantity}</p>
              <p className="sold-tickets">Sold Tickets: {ticket.soldTickets}</p>
              <button onClick={() => handleSellTicket(ticket, 1)}>Sell Ticket</button>
              {/* You can add more logic for selling tickets */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketList;
