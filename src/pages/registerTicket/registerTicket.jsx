import React, {useState} from 'react'
import './registerTicket.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const RegisterTicket = () => {

  const navigate = useNavigate();

 const [formData, setFormData] = useState({
    ticket_priority: '',
    ticket_subject: '',
    ticket_description: '',
 });
  
  const [imageFile, setImageFile] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
   
    const file = e.target.files[0];
    //  console.log(file)
    setImageFile(file);
};


  const handleSubmit = (e) => {
     e.preventDefault();
    axios
      .post("http://localhost:4000/tickets", formData)
      .then((response) => {
        console.log(response);
        navigate('/tickets');
      })

      .catch((error) => console.error(error))
  };

    return (
    <div className='regTicket'>
      <h1 className="h1-title">Register a new ticket</h1>
      <div className='main-reg'>
        <div className='reg-left'>
          <div className='div-space'>
        <div className="label-mrg">
          <label className="label-mrg" htmlFor="username">Username</label>
        </div>
        <div>
          
        </div>
          </div>
          
          <div className='div-space'>
        <div className="label-mrg">
          <label  htmlFor="email">Email</label>
        </div>
        <div>
          </div>
          </div>

        <div className='div-space'>
          <div className="label-mrg">
            <label  htmlFor="priority">Priority</label>
          </div>
            <div className='radio-btn-prior'>
              <label htmlFor="high">
                 <input type="radio" name="ticket_priority" value="High" checked={formData.ticket_priority === 'High'}
                  onChange={handleChange} />High
              </label>
              <label htmlFor="medium">
                <input type="radio" name="ticket_priority" value="Medium" checked={formData.ticket_priority === 'Medium'}
                  onChange={handleChange}/>Medium
           </label>
              <label htmlFor="low">
                <input type="radio" name="ticket_priority" value="Low" checked={formData.ticket_priority === 'Low'}
                  onChange={handleChange} />Low Importance
            </label>
            
          </div>
       </div>    
        
          <div className='div-space'>
           <div className="label-mrg">
            <label htmlFor="desc">What Can We Help You With?</label>
          </div>
            <div className='radio-btn-help'>
              <label htmlFor="">
                <input
                  type="radio"
                  name="ticket_subject"
                  value="general"
                  checked={formData.ticket_subject === "general"}
                  onChange={handleChange}/>General Question
              </label>
              <label htmlFor="">
                <input type="radio" name="ticket_subject" value="feature" checked={formData.ticket_subject === 'feature'}
                  onChange={handleChange} />Feature Request
            </label>
              <label htmlFor="">
                <input type="radio" name="ticket_subject" value="bug" checked={formData.ticket_subject === "bug"}
                  onChange={handleChange} />Bug Report
            </label>
              <label htmlFor="">
                <input type="radio" name="ticket_subject" value="account" checked={formData.ticket_subject === "account"}
                  onChange={handleChange}/>Account Issue
           </label>
              <label htmlFor="">
                <input type="radio" name="ticket_subject" value="other" checked={formData.ticket_subject === "other"}
                  onChange={handleChange}/>Other
            </label>
            
          </div>
        </div>
          
        </div>
        <div className='reg-right'>
          <div className='div-space'>
          <div className="label-mrg">
            <label htmlFor="desc">Describe your problem</label>
          </div>
          <div>
            <textarea type="text" className='txtarea-desc' name="ticket_description" value={formData.ticket_description}
                onChange={handleChange} />
            </div>
          </div>
          
          <div className='div-space'>
          <div className="label-mrg">
            <label htmlFor="desc">Upload the Screenshot</label>
          </div>
          <div id='screenshot'>
            <input type="file" onChange={handleImageChange} />
            </div>
            <div>
              {imageFile && <img id="screen-img" src={URL.createObjectURL(imageFile)} alt="Selected" />}
            </div>
          </div>
          <div className='btn-div'>
            <button className='btn-ticket' type='submit' onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        </div>
    </div>
    )
}

export default RegisterTicket