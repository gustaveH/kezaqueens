import React, { Component } from 'react';
import image from '../images/podcast.jpg';
import { FaCaretSquareDown } from 'react-icons/fa';
import '../App.css';
export default class SingleCard extends Component {
  render() {
    return (
      <article className='podcast'>
        <div className='image-container'>
          <img width='200' src={image} alt='podcast' />
        </div>
        <div className='podcast-info'>
          <h3>Title</h3>
          <h4>Episode, date</h4>
          <h5>
            Info{' '}
            <span>
              <FaCaretSquareDown className='info-dropdown' />
            </span>
          </h5>
          <p>
            Elit pariatur irure cillum enim irure. Sint excepteur pariatur do
            aliqua duis mollit ea tempor.
          </p>
        </div>
      </article>
    );
  }
}
