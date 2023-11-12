// ticket.js

class Ticket {
  constructor(ticketId, eventName, ticketType, price, quantity) {
    this.ticketId = ticketId;
    this.eventName = eventName;
    this.ticketType = ticketType;
    this.price = price;
    this.quantity = quantity;
    this.soldTickets = 0; // Add a property to track sold tickets
  }

  // Add methods to increase and decrease sold tickets
  sellTicket(quantity) {
    if (this.quantity >= quantity) {
      this.soldTickets += quantity;
      this.quantity -= quantity;
    }
  }

  refundTicket(quantity) {
    if (this.soldTickets >= quantity) {
      this.soldTickets -= quantity;
      this.quantity += quantity;
    }
  }
}

export default Ticket;
