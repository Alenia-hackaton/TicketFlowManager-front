import React, { useState } from "react";
import "./TicketPage.css";

const TicketPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [activities, setActivities] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleActivitiesChange = (e) => {
    setActivities(e.target.value);
  };

  return (
    <div className="ticket-page-container">
      <h1>Ticket Page</h1>

      <div className="card">
        <div className="card-header">
          <span className="input-icon">
            <svg
              class="feather feather-trello"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <rect x="7" y="7" width="3" height="9" />
              <rect x="14" y="7" width="3" height="5" />
            </svg>
          </span>
          <input
            type="text"
            className="input-title"
            placeholder="Card Title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <div className="card-body">
          <span className="input-icon2">
            <svg
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path
                d="m2.5 5c-0.27614 0-0.5 0.22386-0.5 0.5s0.22386 0.5 0.5 0.5h15c0.2761 0 0.5-0.22386 0.5-0.5s-0.2239-0.5-0.5-0.5h-15z"
                fill="#F2F2F2"
              />
              <path
                d="m2.5 8c-0.27614 0-0.5 0.22386-0.5 0.5s0.22386 0.5 0.5 0.5h15c0.2761 0 0.5-0.22386 0.5-0.5s-0.2239-0.5-0.5-0.5h-15z"
                fill="#F2F2F2"
              />
              <path
                d="m2 11.5c0-0.2761 0.22386-0.5 0.5-0.5h15c0.2761 0 0.5 0.2239 0.5 0.5s-0.2239 0.5-0.5 0.5h-15c-0.27614 0-0.5-0.2239-0.5-0.5z"
                fill="#F2F2F2"
              />
              <path
                d="m2.5 14c-0.27614 0-0.5 0.2239-0.5 0.5s0.22386 0.5 0.5 0.5h10c0.2761 0 0.5-0.2239 0.5-0.5s-0.2239-0.5-0.5-0.5h-10z"
                fill="#F2F2F2"
              />
            </svg>
          </span>
          <textarea
            className="input-description"
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
          <span className="input-icon3">
          <svg
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path
                d="m2.5 5c-0.27614 0-0.5 0.22386-0.5 0.5s0.22386 0.5 0.5 0.5h15c0.2761 0 0.5-0.22386 0.5-0.5s-0.2239-0.5-0.5-0.5h-15z"
                fill="#F2F2F2"
              />
              <path
                d="m2.5 8c-0.27614 0-0.5 0.22386-0.5 0.5s0.22386 0.5 0.5 0.5h15c0.2761 0 0.5-0.22386 0.5-0.5s-0.2239-0.5-0.5-0.5h-15z"
                fill="#F2F2F2"
              />
              <path
                d="m2 11.5c0-0.2761 0.22386-0.5 0.5-0.5h15c0.2761 0 0.5 0.2239 0.5 0.5s-0.2239 0.5-0.5 0.5h-15c-0.27614 0-0.5-0.2239-0.5-0.5z"
                fill="#F2F2F2"
              />
              <path
                d="m2.5 14c-0.27614 0-0.5 0.2239-0.5 0.5s0.22386 0.5 0.5 0.5h10c0.2761 0 0.5-0.2239 0.5-0.5s-0.2239-0.5-0.5-0.5h-10z"
                fill="#F2F2F2"
              />
            </svg>
         
          </span>
          <input
            type="text"
            className="input-activities"
            placeholder="Activities"
            value={activities}
            onChange={handleActivitiesChange}
          />
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
