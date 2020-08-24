import React from 'react';
import '../App.css';
export default function HomeScroll({ scrollTitle }) {
  // const [click, setClick] = useState(false);

  // function welcomePage() {
  //   console.log('hello');
  // }
  return (
    <div className='arrow-down'>
      <p className='scroll-button'>{scrollTitle}</p>
    </div>
  );
}
