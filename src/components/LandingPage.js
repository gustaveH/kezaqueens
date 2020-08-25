import React from 'react';

import '../App.css';
import Banner from '../components/Banner';
// import SocialMedia from './SocialMedia';

function LandingPage() {
  return (
    <>
      <div className='home-page'>
        <div className='welcome-message'>
          <Banner title='Welcome to keza queens' />
        </div>
        {/* <SocialMedia /> */}
      </div>
    </>
  );
}

export default LandingPage;
