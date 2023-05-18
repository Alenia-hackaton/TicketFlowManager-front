import React, { useState, useEffect } from "react";
import "./TicketPage.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const TicketPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
    <div className="ticket-page-container">
    <h1>Ticket Page</h1>
      {ticket.id ? (
        <div className="card">
          <h3 className="card-heading card-header">Ticket #{ticket.id}</h3>
          <div className="card-body card-text">
            <p>Description: {ticket.ticket_description}</p>
            <p>Priority: {ticket.ticket_priority}</p>
            <p>Subject: {ticket.ticket_subject}</p>
            <p>Creation date: {ticket.creation_date.substring(0, 10)}</p>
            <p>Ticket status: {ticket.ticket_status}</p>
            <p>Requested by: {ticket.username}</p>
            <p>User's email: {ticket.email}</p>
          </div> 
        </div>
        ) : <p>Ticket loading...</p>}       
    </div>
  );
};

export default TicketPage;