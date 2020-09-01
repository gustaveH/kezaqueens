import React from 'react';
import '../App.css';

export default function SingleProfile({ name, bio, social }) {
  return (
    <>
      <div className='singleProfile'>
        <h4 className='name'>{name}</h4>
        <p className='bio'>{bio}</p>
        <div className='profileSocial'>{social}</div>
      </div>
    </>
  );
}
