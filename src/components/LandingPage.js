import React from 'react';
import Welcome from '../components/Welcome';
import image from '../images/queen.jpg';
import '../App.css';
import Banner from '../components/Banner';
import HomeScroll from '../components/HomeScroll';

function LandingPage() {
  return (
    <>
      <section className='home-page'>
        <img src={image} alt='home' />
        <div className='welcome-message'>
          <Banner title='Welcome to keza queens' />
        </div>
        <HomeScroll scrollTitle='Enter' />
      </section>
      <Welcome />
    </>
  );
}

export default LandingPage;
