import TicketCard from "../../components/TicketCard/TicketCard";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Dashboard.css"

export default function Dashboard () {
    // fetch tickets from database
    const [tickets, setTickets] = useState([]);
    const fetchTickets = () => {
      axios.get("http://localhost:4000/tickets/")
      .then((response) => {
          console.log(response.data);
          setTickets(response.data)
      })
    }
    useEffect(() => {
      fetchTickets();
    }, []);

    // Update the status
    const updateTicketStatus = (ticketId, newStatus) => {
          axios
            .put(`http://localhost:4000/tickets/${ticketId}`, { ticket_status: newStatus })
            .then((response) => {
              console.log(response);
              const updatedTickets = tickets.map((ticket) => {
                if (ticket.id === ticketId) {
                  return { ...ticket, ticket_status: newStatus };
                }
                return ticket;
              });
              setTickets(updatedTickets);
            })
            .catch((error) => console.error(error));
        };
    

    // to fetch the tickets in the columns
    const todoTickets = tickets.filter(ticket => ticket.ticket_status === 'To Do');
    const inProgressTickets = tickets.filter(ticket => ticket.ticket_status === 'In Progress');
    const doneTickets = tickets.filter(ticket => ticket.ticket_status === 'Done');

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-heading">Dashboard</h2>
            <div className="cards-container">
                <div className="to-do-container">
                    <h2 className="status-heading" id="to-do">To do</h2>
                    {todoTickets.map((ticket) => (
                    <TicketCard key={ticket.id} ticket={ticket} ticketId={ticket.id} updateStatus={updateTicketStatus}/>
                        ))}
                </div>
                <div className="in-progress-container">
                    <h2 className="status-heading" id="in-progress">In progress</h2>
                    {inProgressTickets.map((ticket) => (
                    <TicketCard key={ticket.id} ticket={ticket} ticketId={ticket.id} updateStatus={updateTicketStatus}/>
                        ))}
                </div>
                <div className="done-container">
                    <h2 className="status-heading" id="done">Done</h2>
                    {doneTickets.map((ticket) => (
                    <TicketCard key={ticket.id} ticket={ticket} ticketId={ticket.id} updateStatus={updateTicketStatus}/>
                        ))}
                </div>
            </div>
        </div>
    )
}