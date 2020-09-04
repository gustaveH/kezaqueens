import React, { Component } from 'react';
import { FaCaretSquareDown } from 'react-icons/fa';
import { SiApplepodcasts, SiSpotify } from 'react-icons/si';
import '../App.css';
export default class SingleCard extends Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    const { title, podcast, img, info } = this.props.podcast;
    return (
      <article className='singleCard'>
        <div className='image-container'>
          <img src={img} alt=' ' />
          {/* <span className='date'>
            <p>Date here</p>
          </span> */}
        </div>
        <div className='podcast-info'>
          <h3>{title}</h3>
          <h4>{podcast}</h4>
          <h5>
            Info{' '}
            <span onClick={this.handleInfo}>
              <FaCaretSquareDown className='info-dropdown' />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}

          <span className='pod-social'>
            <SiApplepodcasts className='itunes' />
            <SiSpotify className='spotify' />
          </span>
        </div>
      </article>
    );
  }
}
