import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default class Navbar extends Component {
  state = {
    clicked: false,
  };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className='navbar'>
        <Link to='/'>
          <h1 className='navbar-logo'>Keza Queens</h1>
        </Link>
        <div className='menu-icon' onClick={this.handleClick}>
          {this.state.clicked ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={this.state.clicked ? 'nav-links active' : 'nav-links'}>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/Podcast'>Podcast</Link>
          </li>
          <li>
            <Link to='/Chat'>Chat</Link>
          </li>
          <li>
            <Link to='/Admin'>Admin</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
