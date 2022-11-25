import React from 'react';
import Image from '../images/airbnb-photogrid.png'

function Hero() {
  return (
    <div>
      <section className='hero'>
        <img src={Image} alt="" className="hero-photo" />
        <h1 className='header'>Online Experience</h1>
        <p className='about'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </section>
    </div>
  )
}

export default Hero