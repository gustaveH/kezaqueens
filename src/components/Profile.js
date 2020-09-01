import React from 'react';
import '../App.css';
import SingleProfile from '../components/SingleProfile';
import { FaInstagram } from 'react-icons/fa';
import womain1 from '../images/woman1.jpg';
import woman2 from '../images/woman2.jpg';

export default function Profile() {
  return (
    <>
      <div className='profile'>
        <div className='leftside'>
          <img className='image1' src={womain1} alt='woman1' />
          <SingleProfile
            name='Martina Usanase'
            bio='Irure sunt et esse ea ad amet ea. 
            Voluptate deserunt est qui aliquip Lorem ut 
            dolore aliqua tempor ea ullamco enim.'
            social={<FaInstagram />}
          />
        </div>
        <div className='rightside'>
          <img className='image2' src={woman2} alt='woman2' />
          <SingleProfile
            name='Grace Karera'
            bio='Irure sunt et esse ea ad amet ea. 
            Voluptate deserunt est qui aliquip Lorem ut 
            dolore aliqua tempor ea ullamco enim.'
            social={<FaInstagram />}
          />
        </div>
      </div>
    </>
  );
}
