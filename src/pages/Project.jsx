import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'

function Project() {
  return (
    <>
    <Header />
    <div style={{ marginTop: '100px' }} className='text-center'>
      <h1>A11 Project</h1>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="d-flex w-25">
          <input type="text" className='form-control' placeholder='Search using Technologies' />
          <i className="fa-solid fa-magnifying-glass fa-rotate-90" style={{ marginLeft: '-40px', color: 'lightgrey' }}></i>
        </div>
      </div>
    </div>
   
      <Row className='container-fluid mt-5'>
        <Col sm={12} md={6} lg={4}>
          <ProjectCard />
        </Col>
      </Row>
    
  </>
   
  )
}

export default Project