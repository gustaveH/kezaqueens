import React from 'react';
import Banner from '../components/Banner';
import '../App.css';
import SocialMedia from './SocialMedia';

function LandingPage() {
  return (
    <>
      <div className='hero-container'>
        <div className='message'>
          <Banner className='title' title='Welcome to Keza Queens' />
        </div>
        <SocialMedia className='social' />
      </div>
    </>
  );
}

export default LandingPage;
