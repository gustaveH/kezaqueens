import React from 'react';
import image from '../images/queen.jpg';
import '../App.css';

function LandingPage() {
  return (
    <div className='home-page'>
      <img src={image} alt='home' />
      <div className='welcome-message'>
        <h1>welcome to keza queens</h1>
      </div>
      <div className='arrow-down'></div>
    </div>
  );
}

export default LandingPage;
