import React from 'react'
import { Col, Row } from 'react-bootstrap'
import titleimage from '../Assets/aa.png'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
function Home() {
  return (
   <>
      <div style={{width:'100%', height:'100vh', backgroundColor:'lightgreen'}}>
      <div className='container-fluid'> 
      <Row className='align-items-center p-5'>
        <Col sm={12} md={6}>
        <h1 style={{fontSize:'80px', color:'white'}}>PROJECT FAIR</h1>
        <p>One stop destination for all soft. projects</p>
        <Link to={'/login'} className='btn btn-success rounded'>Get Started <i class="fa-solid fa-arrow-right ms-3"></i></Link>
        </Col>
        <Col sm={12} md={6}>
          <img src={titleimage} alt="" className='w-75' />
          </Col>
      </Row>
      </div>
      </div>
      <div className='all-project mt-5'>
        <h1 className='text-center mt-5'>Explore out project</h1>
        <marquee scrollAmount={20}>
          <div className='d-flex'>
            <div className='ms-5' style={{width:'500px'}}>
            <ProjectCard/>
            </div>
            <div className='ms-5' style={{width:'500px'}}>
            <ProjectCard/>
            </div>
            <div className='ms-5' style={{width:'500px'}}>
            <ProjectCard/>
            </div>
             </div>
        </marquee>

        <div className='text-center mt-5'>
          <Link to={'/project'}>See More Project</Link>
        </div>
           

      </div>
   </>
  )
}

export default Home