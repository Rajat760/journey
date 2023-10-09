import React from 'react';
import './banner.css'; 
import video from "./pexels_videos_1409899 (2160p).mp4"
import video1 from "./pexels-syam-krishnan-9154179 (2160p).mp4"
import video2 from "./pexels_videos_1448735 (2160p).mp4"
import video3 from "./pexels-imad-clicks-10653331 (2160p).mp4"
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from 'react';


let arr = [video, video1, video2, video3];

const Banner = () => {
  const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
     
       
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    const off = offset

    let opacity = 1
 
  

    let style = { opacity: opacity};
    console.log(style)
 
  return (
    <div className="banner">
      <video className="video" autoPlay muted loop>
        <source src={arr[(Math.floor(Math.random() * arr.length))]} type="video/mp4"  />
      </video>
      <div className="text-overlay">
        <h1 style={style} > Discover INDIA with SAFAR</h1>
        <p>Welcome to our website. This is the start of your SAFAR</p>
      </div>
    </div>
  );
}

export default Banner;
