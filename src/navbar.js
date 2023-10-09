import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import logo from "./Viaggo-logos_transparent.png"
import {  useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
    
      navigate('/');
    };
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
    const { loginWithRedirect, logout,  isAuthenticated, user} = useAuth0();
  return (
    <nav className="navbar">
      <div className="logo1" onClick={navigateToHome}>
        SAFAR
      </div>
      <ul className="nav-links">
        <li onClick={navigateToKerala}><a >Kerala</a></li>
        <li onClick={navigateToGoa}><a >Goa</a></li>
        <li onClick={navigateToPondi}><a >Pondicherry</a></li>
        <li onClick={navigateToJaipur}><a >Jaipur</a></li>
        <li onClick={navigateToRishi}><a >Rishikesh</a></li>
        <li onClick={navigateToMeghalaya}><a >Meghalaya</a></li>
      </ul>
      
      <div className="btns">
      {isAuthenticated? <img src={user.picture} alt={user.name} className='logo' /> : <></>}
        {isAuthenticated?  <button className="button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button> : <button className="button" onClick={() => loginWithRedirect()}>Login</button>}
      
      
      </div>
      
    </nav>
  );
}

export default Navbar;
