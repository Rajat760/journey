import React, { useState } from 'react';
import './kerala.css'; // Import the CSS file for styling
import Video from "./Kerala - God's own country 4K.mp4"
import { useNavigate } from "react-router-dom";


const VideoBackgroundPage = () => {
  const [arrivalDate, setArrivalDate] = useState('');
  const [leavingDate, setLeavingDate] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleArrivalDateChange = (event) => {
    setArrivalDate(event.target.value);
  };

  const handleLeavingDateChange = (event) => {
    setLeavingDate(event.target.value);
  };

  const handleBookNow = () => {
    // Perform any further processing or send email
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 8000);
  };
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="video-background">
      <div className='black'></div>
      <video autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="video-text">
        <h1>Kerala</h1>
        <div className="booking-form-container">
      <h2>Booking Form</h2>
      <form className="booking-form">
        <div className="form-group">
          <label htmlFor="arrivalDate">Arrival Date</label>
          <input
            type="date"
            id="arrivalDate"
            name="arrivalDate"
            value={arrivalDate}
            onChange={handleArrivalDateChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="leavingDate">Leaving Date</label>
          <input
            type="date"
            id="leavingDate"
            name="leavingDate"
            value={leavingDate}
            onChange={handleLeavingDateChange}
          />
        </div>
        <button type="button" onClick={handleBookNow}>
          Book Now
        </button>
      </form>

        
      </div>
   
    </div>
    {showNotification && (
        <div className="notification">
          <div className="notification-content">
            Further process link has been sent to your email
          </div>
          <div className="notification-line"></div>
        </div>
      )}
 <div className=" st" onClick={navigateToHome}>
        SAFAR
      </div>
    </div>
  );
};

export default VideoBackgroundPage;
