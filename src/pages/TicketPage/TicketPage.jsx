import React, {useState} from 'react'
import './TicketPage.css'

const TicketPage = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [activities, setActivities] = useState('');


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleActivitiesChange = (e) => {
    setActivities(e.target.value);
  }


  return (
    
    <div className='ticket-page-container'>
      <h1>Ticket Page</h1>

      <div className="card">
      <div className="card-header">
        <input
          type="text"
          className="input-title"
          placeholder="Card Title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>

      <div className="card-body">
        <textarea
          className="input-description"
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
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

export default TicketPage