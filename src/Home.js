import React from 'react'
import Navbar from "./navbar.js"
import Banner from "./banner.js"
import Card from "./card.js"
import Mission from "./mission.jsx"
import BookNow from "./Book.jsx"


function Home() {
  return (
    <div>
       <Navbar />
        <Banner />
        <BookNow />

        <Card />
        <Mission />
    </div>
  )
}

export default Home
