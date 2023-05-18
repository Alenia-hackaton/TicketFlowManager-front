
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
                <p className="card-text">Priority: {ticket.ticket_priority}</p>
                <p className="card-text">Subject: {ticket.ticket_subject}</p>     
                {/* Must change this for link once routes are established */}
                <form className="center">
                  <label htmlFor="change-status">
                    Change status{" "}
                      <select id="status-select" onChange={handleChange}>
                        <option value="">---</option>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                      </select>
                  </label>
                </form>
                <p className="card-text">See ticket</p>
            </div>
        ) : null}
        </div>
      )
}