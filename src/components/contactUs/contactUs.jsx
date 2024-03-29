import React, { useState } from 'react';
import "./contactUs.css"

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-us-container">
  <div className='contact-left'>
  <h2 className='contact-header'>Contact Us</h2>
  <p>Need to get in touch with us?
    <br /> Either fill out the form with your request 
    <br />or contact us via email: Edenmilo31@gmail.com </p>
  </div>
    <div className="contact-right">
    
      <div className='contact-us-form'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:*</label>
          <input className="input-field"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:*</label>
          <input className="input-field"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea className="input-field"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='submit-button'
        >Submit</button>
      </form>
    </div>
<br />
<br />
<br />
<br />


  </div>
 
  </div>);
}

export default ContactUs;
