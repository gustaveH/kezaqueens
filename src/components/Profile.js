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
            dolore aliqua tempor ea ullamco enim.Pariatur 
            est mollit duis pariatur in ullamco eu pariatur
            laboris ullamco qui. Non esse veniam nostrud est 
            eiusmod cupidatat nisi occaecat labore consectetur
            amet dolore ullamco ex. Consectetur consequat id 
            tempor adipisicing nulla tempor. Reprehenderit ea
            non mollit deserunt adipisicing velit magna velit labore et.
            Adipisicing commodo cillum occaecat ad ea mollit.
            Commodo deserunt aliquip Lorem cupidatat aliquip 
            cupidatat dolor ut eu magna est. '
            social={<FaInstagram />}
          />
        </div>
        <div className='rightside'>
          <img className='image2' src={woman2} alt='woman2' />
          <SingleProfile
            name='Grace Karera'
            bio='Irure sunt et esse ea ad amet ea. 
            Voluptate deserunt est qui aliquip Lorem ut 
            dolore aliqua tempor ea ullamco enim.Pariatur 
            est mollit duis pariatur in ullamco eu pariatur
            laboris ullamco qui. Non esse veniam nostrud est 
            eiusmod cupidatat nisi occaecat labore consectetur
            amet dolore ullamco ex. Consectetur consequat id 
            tempor adipisicing nulla tempor. Reprehenderit ea
            non mollit deserunt adipisicing velit magna velit labore et.
            Adipisicing commodo cillum occaecat ad ea mollit.
            Commodo deserunt aliquip Lorem cupidatat aliquip 
            cupidatat dolor ut eu magna est. '
            social={<FaInstagram />}
          />
        </div>
      </div>
    </>
  );
}
