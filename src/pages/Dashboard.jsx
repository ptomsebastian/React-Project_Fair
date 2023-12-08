import React from 'react'
import Header from '../components/Header'
import MyProject from '../components/MyProject'
import Profile from '../components/Profile'
import { Col, Row } from 'react-bootstrap'

function Dashboard() {
  return (
    <>
    <Header dashboard/>
    <h2 className='mt-5 ms-3'>Welcome <span className='text-warning'>User</span></h2>
    <Row className='container-fluid mt-5'>
      <Col md={8}>
        <MyProject />
      </Col>
      <Col md={4}>
        <Profile />
      </Col>
    </Row>
  </>
  
  )
}

export default Dashboard