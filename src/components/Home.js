import React, { useEffect, useLayoutEffect, useRef } from 'react'
import pdf from '../pdf/Resume.pdf'
import profile from './data/profile.json'
import Typed from 'typed.js';

export default function Home() {

  const typedRef = useRef(null);

useEffect(() => {
const options = {
  strings: [
    "Welcome to my profile",
    "I am Abhishek Gupta",
    "I am Front End Web Developer"
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop:true,
};

const typed = new Typed(typedRef.current, options);

return () => {
  typed.destroy();
}
}, []);

  return (
    <>
      <div className='container home' id='home'>
        <div className='left'
        data-aos="fade-down"
        data-aos-duration="2000"
        >
          <div className='img'>
            <img src={`./assets/${profile.imgSrc}`} alt='profile'></img>
          </div>
        </div>
        <div className='right'
        data-aos="fade-up"
        data-aos-duration="2000"
        >
          <h1 ref={typedRef}></h1>
          <a href={pdf} download="Resume.pdf" className='btn btn-outline-warning my-3'>Download Resume</a>
        </div>
      </div>
    </>
  )
}
