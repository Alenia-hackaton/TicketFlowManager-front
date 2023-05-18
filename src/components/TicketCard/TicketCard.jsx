
export default function TicketCard ({ticket}) {
      return (
        <div className="card-container">
        {ticket ? (
            <div className="inner-card-container">
                <h3 className="card-heading">Ticket #{ticket.id}</h3>
                <p className="card-text">Priority: {ticket.ticket_priority}</p>
                <p className="card-text">Subject: {ticket.ticket_subject}</p>     
                {/* Must change this for link once routes are established */}
                <form className="center">
                  <label htmlFor="change-">
                    Change status{" "}
                      <select id="cupcake-select">
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