import React, { Component } from 'react';
import image from '../images/queen.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className='home-page'>
        <img src={image} alt='home' />
        <h1>Welcome To Keza Queens</h1>
      </div>
    );
  }
}
