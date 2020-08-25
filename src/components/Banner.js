import React from 'react';
import '../App.css';

export default function Banner({ title }) {
  return (
    <div className='welcome-message'>
      <h1>{title}</h1>
    </div>
  );
}
