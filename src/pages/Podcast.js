import React, { Component } from 'react';
import SingleCard from '../components/SingleCard';
import { Data } from '../Data';
import '../App.css';

export default class Podcast extends Component {
  state = {
    podcasts: Data,
  };
  render() {
    const { podcasts } = this.state;
    return (
      <>
        <h6 className='heading'>Podcasts</h6>
        <section className='podcast'>
          {podcasts.map((podcast) => {
            return <SingleCard key={podcast.id} podcast={podcast} />;
          })}
        </section>
      </>
    );
  }
}
