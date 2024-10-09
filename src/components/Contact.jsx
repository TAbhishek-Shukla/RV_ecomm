import React, { useState } from 'react';
import '../styles/contact.css';
import img from '../assets/contact.jpg';

const contactData={
  username:"",
  email:"",
  message:""
}


const Contact = () => {
  const [user, setUser] = useState(contactData);
  const handleChange=(e)=>{
    setUser(prev=>{
      const {name,value}=e.target;
      return {
        ...prev,
        [name]:value
      }
    });
  }
  console.log(user);
 
  return (
    <>
    <section className="contact-sect">
      <div className="contact-container">
        <form className="contact-form">
          <h2>Contact Us</h2>
          <div className="form-group">
            <label htmlFor="username">Name</label>
            <input type="text" id="username" name="username" onChange={handleChange}  required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" onChange={handleChange} required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-image">
          <img src={img} alt="Contact Us" />
        </div>
      </div>
    </section>
     <section className="map-section">
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9698804691166!2d77.03409037475568!3d28.600680375682153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bde33a821cf%3A0x7845fdcde318dd08!2sISKCON%20Temple%20Dwarka%20Delhi!5e0!3m2!1sen!2sin!4v1727083060818!5m2!1sen!2sin" width={'100%'} height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
     </section>
    </>
  );
};


export default Contact;
