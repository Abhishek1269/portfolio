import React from 'react'
import Projects from './data/project.json'

export default function Project() {
  return (
    <>
      <div className='container project my-3' id='projects'>
        <h1>PROJECTS</h1>
        <div className='row d-flex justify-content-center align-content-center'>
          {Projects.map((data) => (
            <>
              <div key={data.id} className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4" data-aos="flip-left" data-aos-duration="2000">
                <div className="card bg-dark text-light" style={{width: '18rem', border: '2px solid goldenrod', borderRadius: '10px', boxShadow: '5px 5px 10px 10px goldenrod'}}>
                  <div className='d-flex justify-content-center align-content-center p-3'>
                  <img src={`/assets/${data.imageSrc}`} className="card-img-top" alt="" style={{width: '250px', height: '250px', border: '3px solid goldenrod', borderRadius: '10px'}}/>
                  </div>
                    <div className="card-body text-center">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">{data.description}</p>
                      <a href={data.demo} target='_blank' className="btn btn-outline-warning">Demo</a>
                    </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}
