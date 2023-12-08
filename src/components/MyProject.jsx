import React from 'react'
import AddProject from './AddProject'

export default function MyProject() {
  return (
    <div className='card shadow p-4'>
      <div className="d-flex justify-content-between">
        <h3 className='text-success'>My Projects</h3>
        <AddProject />
      </div>
      <div className="mt-4">
        <div className="border d-flex align-items-center p-2 rounded">
          <h5>Project Title</h5>
          <div className="ms-auto d-flex">
            <button className='btn text-info'><i className="fas fa-pen-to-square"></i></button>
            <button className='btn text-success'><i className="fab fa-github"></i></button>
            <button className='btn text-danger'><i className="fas fa-trash"></i></button>
          </div>
        </div>
       
        <p className='text-danger fw-bolder fs-'>No project uploaded yet!</p>
      </div>
    </div>
  )
  
   
  
}
