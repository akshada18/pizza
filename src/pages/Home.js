import React from 'react';
import {Link} from "react-router-dom";
import backgroundImage from "../assets/bg.jpeg"
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='headerContainer'>
          <h1>Pizza Hut</h1>
              <p>PIZZA TASTES BETTER THAN SKINNY FEELS</p>
              <Link to="/menu">
              <button>ORDER NOW</button>
              </Link>
      </div>
    </div>
  )
}

export default Home
