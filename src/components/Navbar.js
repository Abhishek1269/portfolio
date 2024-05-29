import React from 'react'

export default function Navbar() {
  return (
    <>
        <div className='container nav_bar'
        data-aos="fade-down"
        data-aos-duration="1000"
        >
            <div className='left nav_item'>Abhishek's Portfolio</div>
            <div className='right'>
                <a href='#home' className='nav_item'>Home</a>
                <a href='#experience' className='nav_item'>Experience</a>
                <a href='#skills' className='nav_item'>Skills</a>
                <a href='#projects' className='nav_item'>Projects</a>
                <a href='#contact' className='nav_item'>Contact</a>
            </div>
        </div>
    </>
  )
}

