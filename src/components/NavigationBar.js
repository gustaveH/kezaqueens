import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';

export default class NavigationBar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/'>Keza Queens</Link>
            <button
              type='button'
              className='nav-btn'
              onClick={this.handleToggle}
            >
              <GoThreeBars className='nav-icon' />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
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
        </div>
      </nav>
    );
  }
}
