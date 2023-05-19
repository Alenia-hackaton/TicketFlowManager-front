import React, { useState, useEffect } from "react";
import "./TicketPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const TicketPage = () => {
  const { id } = useParams();
  const [ ticket, setTicket] = useState({});

  const fetchTickets = () => {
    axios.get(`http://localhost:4000/tickets/${id}`)
    .then((response) => {
        console.log(response.data);
        setTicket(response.data[0])
    })
  }
  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className="ticket-page">
    <p><Link to="/tickets"className="back-link">Back</Link></p>
    <h1>Ticket Page</h1>
    <div className="ticket-page-container">
      {ticket.id ? (
        <div className="card">
          <h3 className="card-heading card-header">Ticket #{ticket.id}</h3>
          <div className="card-body card-text">
            <p className="paragraph"><span className="bold">Description:</span> {ticket.ticket_description}</p>
            <p className="paragraph"><span className="bold">Priority:</span> {ticket.ticket_priority}</p>
            <p className="paragraph"><span className="bold">Subject:</span> {ticket.ticket_subject}</p>
            <p className="paragraph"><span className="bold">Creation date: </span>{ticket.creation_date.substring(0, 10)}</p>
            <p className="paragraph"><span className="bold">Ticket status:</span> {ticket.ticket_status}</p>
            <p className="paragraph"><span className="bold">Requested by user id:</span> {ticket.user_id}</p>
          </div> 
        </div>
        ) : <p>Ticket loading...</p>}       
    </div>
    </div>
  );
};

export default TicketPage;
