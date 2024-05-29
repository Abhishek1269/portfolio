import React from 'react'
import Skills from './data/skills.json'

export default function Skill() {
  return (
    <div>
      <div className='container skill' id='skills'>
      <h1>SKILLS</h1>
      <div className='items'>
      {Skills.map((data) => (
        <>
          <div className='item'  key={data.id} data-aos="zoom-in-up" data-aos-duration="2000">
            <img src={`/assets/${data.imageSrc}`} alt=''></img>
            <h3>{data.title}</h3>
          </div>
        </>
      ))}
      </div>
      </div>
    </div>
  )
}
