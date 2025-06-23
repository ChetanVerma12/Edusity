import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { useState } from 'react'
import React from 'react'

function Contact() {
   const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d4ccfc51-ef75-404a-8ecc-178cc46b46ba");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a Message <img src={msg_icon} alt="msg_icon" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolores aliquid laborum qui fugit quisquam sint optio odio ut magnam alias, natus quaerat nam ducimus dolorem similique, quo in esse laudantium! Amet, vero?</p>
        <ul>
            <li> <img src={mail_icon} alt="mail_icon" /> chetanverma5637@gmail.com</li>
            <li> <img src={phone_icon} alt="phone_icon" /> 7987885637</li>
            <li><img src={location_icon} alt="location_icon" /> Lorem, ipsum dolor. <br />Lorem, ipsum dolor.</li>
        </ul>
      </div>
       <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder='Enter your mobile number' required />
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="white_arrow" /></button>
        </form>
        <span>{result}</span>
       </div>
    </div>
  )
}

export default Contact