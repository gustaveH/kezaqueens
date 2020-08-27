import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaCrown } from 'react-icons/fa';

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='nav-links'>
          <h1 className='navbar-logo'>
            Keza Queens <FaCrown className='crown' />
          </h1>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/About' className='nav-links' onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Podcast' className='nav-links' onClick={closeMenu}>
              Podcast
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Chat' className='nav-links' onClick={closeMenu}>
              Chat
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Admin' className='nav-links' onClick={closeMenu}>
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
