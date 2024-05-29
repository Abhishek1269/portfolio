import React from 'react'
import experience from './data/company.json'

export default function Experience() {
  return (
    <div>
      <div className='container exp' id='experience'>
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return(
            <div>
              <div key={data.id} className='exp-item text-center my-5'  data-aos="flip-right" data-aos-duration="2000">
                <div className='left'>
                  <img src={`/assets/${data.imageSrc}`} alt=''></img>
                </div>
                <div className='right'>
                  <h2>{data.role}</h2>
                  <h4 style={{color: "goldenrod"}}>{data.startDate}{" "}{data.endDate}{" "}{data.location}</h4>
                  <h5 style={{color: "goldenrod"}}>{data.experiences[0]}</h5>
                  <h5 style={{color: "goldenrod"}}>{data.experiences[1]}</h5>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
