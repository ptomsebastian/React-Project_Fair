import React from 'react'
import Card from 'react-bootstrap/Card';
import titleimage from '../Assets/aa.png'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

export default function ProjectCard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
    <Card className='btn shadow' onClick={handleShow}>
      <Card.Img variant="top" src={titleimage} />
      <Card.Body>
        <Card.Title className='text-center'>Job Fair</Card.Title>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title style={{color:'yellowgreen'}}>Video Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{height:'250px'}}>
            <Col md={6}>
            <img src={titleimage} alt="" className='w-75' width={'100%'} />
            </Col>
            <Col md={6}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ex tempora repudiandae sint blanditiis, repellat non velit quibusdam vero hic adipisci ducimus quis accusamus enim consequuntur facilis ratione nihil quisquam!
              </p>
              <p><span className='fw-bolder'>Technologies</span>: HTML, CSS, React</p>
            </Col>
          </Row>
          <div className='d-flex'>
            <a href="" target='_blank' style={{color:'grey'}}><i class='fa-brands fa-github fa-2x ms-5'></i></a>
            <a href="" target='_blank' style={{color:'grey'}}><i class='fa-solid fa-link fa-2x ms-5'></i></a>
          </div>
        </Modal.Body>

      </Modal>
    </div>
  )
}
