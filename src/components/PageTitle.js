import React from 'react';
import '../App.css';

export default function PageTitle({ header }) {
  return (
    <div className='header-title'>
      <h4>{header}</h4>
    </div>
  );
}
