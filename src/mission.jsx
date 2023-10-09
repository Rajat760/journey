import React from 'react';
import './mission.css'; // Import the CSS file for styling

const Mission = () => {
  return (
    <div className="mission-section" style={{ backgroundColor: 'tomato' }}>
      <div className="mission-content">
        <h2>The Mission of SAFAR</h2>
        <p>Our mission is to help you discover India.</p>
        <p>In India's embrace, unity finds its home, <br/>
Diversity weaves a tapestry, vibrant and bold. <br/>
A land where beauty's secrets are unfurled, <br/>
India's heart beats with a love that's world.</p>
      </div>
      <div className="video-container">
      <iframe width="560" height="315" align="middle" src="https://www.youtube.com/embed/35npVaFGHMY?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default Mission;
