import { Link } from "react-router-dom";
import "./TicketCard.css"


export default function TicketCard ({ticket, ticketId, updateStatus}) {
  const handleChange = (event) => {
    const newStatus = event.target.value;
    updateStatus(ticketId, newStatus);
  };  
      return (
        <div className="card-container">
        {ticket ? (
            <div className="inner-card-container">
                <h3 className="card-heading">Ticket #{ticket.id}</h3>
                <p><strong>Requested by user id</strong>: {ticket.user_id}</p>
                <p className="card-text"><strong>Priority</strong>: {ticket.ticket_priority}</p>
                <p className="card-text"><strong>Subject:</strong> {ticket.ticket_subject}</p>     
                <form className="center">
                  <label htmlFor="change-status"><strong>
                    Change status</strong>{" "}
                      <select className="status-select" onChange={handleChange}>
                        <option value="">---</option>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                      </select>
                  </label>
                </form>
                <br />
                <p className="card-text link-text"><Link to={`/tickets/${ticketId}`} className="see-ticket-link">View ticket</Link></p>
            </div>
        ) : null}
        </div>
      )
}