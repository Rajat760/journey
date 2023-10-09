import React from "react";
import "./card.css"; // Import the CSS file for styling
import {  useNavigate } from 'react-router-dom';
import kerala from "./kerala.png"
import meghalaya from "./meghalaya.png"
import goa from "./goa.png"
import rishikesh from "./rishikesh.png"
import jaipur from "./Jaipur.png"
import pondi from "./Pondicherry.png"
import{ useState } from 'react';
import './modal.css';

const Card = () => {
    const navigate = useNavigate();

  const navigateToKerala = () => {
    // 👇️ navigate to /contacts
    navigate('/kerala');
  };

  const navigateToPondi = () => {
    // 👇️ navigate to /contacts
    navigate('/pondicherry');
  };

  const navigateToJaipur = () => {
    // 👇️ navigate to /contacts
    navigate('/jaipur');
  };
  const navigateToRishi = () => {
    // 👇️ navigate to /contacts
    navigate('/rishikesh');
  };
  const navigateToMeghalaya = () => {
    // 👇️ navigate to /contacts
    navigate('/meghalaya');
  };
  const navigateToGoa = () => {
    // 👇️ navigate to /contacts
    navigate('/goa');
  };
  
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="head">
      <div className="card">
        <img
          src={kerala}
          alt="Holiday"
          className="holiday-img"
        />

        <h3 className="place-name">Kerala</h3>
        <div className="pp">
          <h4 className="package-name">Premium ✅</h4>
          <p className="package-price">₹39000</p>
        </div>

        <p className="package-description">
          Kerala, a treasure trove of natural beauty and rich culture,
          captivates with its lush green landscapes, serene backwaters, stunning
          beaches, vibrant festivals, and enchanting traditional art forms.
        </p>
       
        <button className="details-button" onClick={navigateToKerala}>
        Details
    </button>

    
      </div>
      <div className="card">
        <img
          src={pondi}
          alt="Holiday"
          className="holiday-img"
        />

        <h3 className="place-name">Pondicherry</h3>
        <div className="pp">
          <h4 className="package-name">Premium ✅</h4>
          <p className="package-price">₹35000</p>
        </div>

        <p className="package-description">
        Pondicherry, a captivating union territory, enthralls visitors with its enchanting blend of French colonial heritage and Indian culture. From its serene beaches and charming streets to its spiritual ashrams and delectable cuisine, Pondicherry offers a unique and delightful experience.
        </p>
        <button className="details-button" onClick={navigateToPondi}>
      Details
    </button>
      </div>  <div className="card">
        <img
          src={meghalaya}
          alt="Holiday"
          className="holiday-img"
        />

        <h3 className="place-name">Meghalaya</h3>
        <div className="pp">
          <h4 className="package-name">Premium ✅</h4>
          <p className="package-price">₹22000</p>
        </div>

        <p className="package-description">
        Meghalaya, known as the "Abode of Clouds," is a mesmerizing state in northeast India. Its lush green landscapes, breathtaking waterfalls, living root bridges, and vibrant tribal culture make it a paradise for nature lovers and explorers.
        </p>
        <button className="details-button" onClick={navigateToMeghalaya}>
      Details
    </button>
      </div>  <div className="card">
        <img
          src={goa}
          alt="Holiday"
          className="holiday-img"
        />

        <h3 className="place-name">Goa</h3>
        <div className="pp">
          <h4 className="package-name">Premium ✅</h4>
          <p className="package-price">₹29000</p>
        </div>

        <p className="package-description">
        Goa, the pearl of the Arabian Sea, boasts pristine beaches, azure waters, golden sunsets, lush green landscapes, vibrant markets, Portuguese charm, delicious cuisine, and a laid-back vibe, creating an irresistible allure that captures the heart and soul of every visitor.
        </p>
        <button className="details-button" onClick={navigateToGoa}>
      Details
    </button>
      </div>  <div className="card">
        <img
          src={jaipur}
          alt="Holiday"
          className="holiday-img"
        />

        <h3 className="place-name">Jaipur</h3>
        <div className="pp">
          <h4 className="package-name">Premium ✅</h4>
          <p className="package-price">₹19000</p>
        </div>

        <p className="package-description">
        Jaipur, the Pink City of India, enchants with its majestic palaces, vibrant markets, intricate architecture, rich history, and royal heritage. From the magnificent Amber Fort to the bustling bazaars, Jaipur is a captivating blend of colors, culture, and regal allure.
        </p>
        <button className="details-button" onClick={navigateToJaipur}>
      Details
    </button>
      </div>  <div className="card">
        <img
          src={rishikesh}
          alt="Holiday"
          className="holiday-img"
        />

        <h3 className="place-name">Rishikesh</h3>
        <div className="pp">
          <h4 className="package-name">Premium ✅</h4>
          <p className="package-price">₹22000</p>
        </div>

        <p className="package-description">
        Rishikesh, the Yoga Capital of the World, nestled in the foothills of the Himalayas, is a spiritual haven. With its sacred Ganges River, serene ashrams, adventure sports, and tranquil ambiance, Rishikesh offers a transformative and soul-stirring experience.
        </p>
        <button className="details-button" onClick={navigateToRishi}>
      Details
    </button>
      </div> 
    </div>
    
  );
};

export default Card;
