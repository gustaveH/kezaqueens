import React from 'react';
import image from '../images/queen.jpg';
import '../App.css';
import Banner from '../components/Banner';
// import SocialMedia from './SocialMedia';

function LandingPage() {
  return (
    <>
      <section className='home-page'>
        <img src={image} alt='home' />
        <div className='welcome-message'>
          <Banner title='Welcome to keza queens' />
        </div>
        {/* <SocialMedia /> */}
      </section>
    </>
  );
}

export default LandingPage;
