import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-scroll';

export default function HomeScroll({ scrollTitle }) {
  const [click, setClick] = useState(false);

  function welcomePage() {
    console.log('hello');
  }
  return (
    <div className='arrow-down' onClick={welcomePage}>
      <p className='scroll-button'>{scrollTitle}</p>
    </div>
  );
}
