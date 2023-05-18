import React, {useState} from 'react'
import './registerTicket.css'

const RegisterTicket = () => {

 const [formData, setFormData] = useState({
    username: '',
    email: '',
    priority: '',
    helpType: '',
    description: '',
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
    console.log('Fuck Off')
  };

  return (
    <div className='regTicket'>
      <h1>Register a new ticket</h1>
      <div className='main-reg'>
        <div className='reg-left'>
        
          <div className='div-space'>
        <div className="label-mrg">
          <label className="label-mrg" htmlFor="username">Username</label>
        </div>
        <div>
          <input
          type="text"
                className='input-name'
                name='username'
          value={formData.username}
          onChange={handleChange} />
        </div>
          </div>
          
          <div className='div-space'>
        <div className="label-mrg">
          <label  htmlFor="email">Email</label>
        </div>
        <div>
          <input type="text" className='input-email'
          name="email"
          value={formData.email}
          onChange={handleChange}    />
          </div>
          </div>

        <div className='div-space'>
          <div className="label-mrg">
            <label  htmlFor="priority">Priority</label>
          </div>
            <div className='radio-btn-prior'>
              <label htmlFor="high">
                 <input type="radio" name="priority" value="heigh" checked={formData.priority === 'heigh'}
                  onChange={handleChange} />High
              </label>
              <label htmlFor="medium">
                <input type="radio" name="priority" value="medium" checked={formData.priority === 'medium'}
                  onChange={handleChange}/>Medium
           </label>
              <label htmlFor="low">
                <input type="radio" name="priority" value="low" checked={formData.priority === 'low'}
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
                  name="help"
                  value="general"
                  checked={formData.help === "general"}
                  onChange={handleChange}/>General Question
              </label>
              <label htmlFor="">
                <input type="radio" name="help" value="feature" checked={formData.help === 'feature'}
                  onChange={handleChange} />Feature Request
            </label>
              <label htmlFor="">
                <input type="radio" name="help" value="bug" checked={formData.help === "bug"}
                  onChange={handleChange} />Bug Report
            </label>
              <label htmlFor="">
                <input type="radio" name="help" value="account" checked={formData.help === "account"}
                  onChange={handleChange}/>Account Issue
           </label>
              <label htmlFor="">
                <input type="radio" name="help" value="other" checked={formData.help === "other"}
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
            <textarea type="text" className='txtarea-desc' name="description" value={formData.description}
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