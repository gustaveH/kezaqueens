import React from 'react';
import image from '../images/queen.jpg';

function LandingPage() {
  return (
    <div className='home-page'>
      <img src={image} alt='home' />
      <h1>Welcome Keza Queens</h1>
    </div>
  );
}

export default LandingPage;
