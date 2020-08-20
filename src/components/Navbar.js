import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default class Navbar extends Component {
  state = {
    clicked: false,
    scroll: false,
  };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  closeNav = () => {
    this.setState({
      clicked: false,
    });
  };

  render() {
    return (
      <nav className='navbar active'>
        <Link to='/' onClick={this.closeNav}>
          <h1 className='navbar-logo'>Keza Queens</h1>
        </Link>
        <div className='menu-icon' onClick={this.handleClick}>
          {this.state.clicked ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={this.state.clicked ? 'nav-links active' : 'nav-links'}>
          <li>
            <Link to='/About' onClick={this.closeNav}>
              About
            </Link>
          </li>
          <li>
            <Link to='/Podcast' onClick={this.closeNav}>
              Podcast
            </Link>
          </li>
          <li>
            <Link to='/Chat' onClick={this.closeNav}>
              Chat
            </Link>
          </li>
          <li>
            <Link to='/Admin' onClick={this.closeNav}>
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
