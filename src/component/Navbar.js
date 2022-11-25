import React from 'react';
import Image from "../images/airbnb-logo.png";
import '../App.css';

function Navbar() {
  return (
    <div>
      <nav className='nav-container'>
        <img src={Image} alt="" className='nav-logo' />
      </nav>
    </div>
  )
}

export default Navbar