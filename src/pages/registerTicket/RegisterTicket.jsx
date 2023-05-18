import React from 'react'
import './registerTicket.css'

const registerTicket = () => {
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
          <input type="text" className='input-name' />
        </div>
          </div>
          
          <div className='div-space'>
        <div className="label-mrg">
          <label  htmlFor="email">Email</label>
        </div>
        <div>
          <input type="text" className='input-email' />
          </div>
          </div>

        <div className='div-space'>
          <div className="label-mrg">
            <label  htmlFor="priority">Priority</label>
          </div>
            <div className='radio-btn-prior'>
              <label htmlFor="high">
                 <input type="radio" name="priority" value="heigh" />High
              </label>
              <label htmlFor="medium">
                <input type="radio" name="priority" value="medium" />Medium
           </label>
              <label htmlFor="low">
                <input type="radio" name="priority" value="low" />Low Importance
            </label>
            
          </div>
       </div>    
        
          <div className='div-space'>
           <div className="label-mrg">
            <label htmlFor="desc">What Can We Help You With?</label>
          </div>
            <div className='radio-btn-help'>
              <label htmlFor="">
                <input type="radio" name="help" value="general" />General Question
              </label>
              <label htmlFor="">
                <input type="radio" name="help" value="feature" />Feature Request
            </label>
              <label htmlFor="">
                 <input type="radio" name="help" value="bug" />Bug Report
            </label>
              <label htmlFor="">
                <input type="radio" name="help" value="account" />Account Issue
           </label>
              <label htmlFor="">
                <input type="radio" name="help" value="other" />Other
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
            <textarea type="text" className='txtarea-desc' />
            </div>
          </div>
          
          <div className='div-space'>
          <div className="label-mrg">
            <label htmlFor="desc">Upload the Screenshot</label>
          </div>
          <div id='screenshot'>
            <input type="file" />
            </div>
          </div>
          <div className='btn-div'>
            <button className='btn-ticket'>Submit</button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default registerTicket