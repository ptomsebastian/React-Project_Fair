import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AddProject() {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
      <Col md={6}>
        <label htmlFor="image" className='text-center'>
          <input id='image' type="file" style={{ display: 'none' }} />
          <img width={'100%'} src="https://m.media-amazon.com/images/I/71sKzRQtXtL.png" alt="no image" />
        </label>
      </Col>
      <Col md={6} className='d-flex justify-content-center align-items-center flex-column'>
        <div className='mb-3 w-100'>
          <input type="text" className='form-control' placeholder='Project Title' />
        </div>
        <div className='mb-3 w-100'>
          <input type="text" className='form-control' placeholder='Project Title' />
        </div>
        <div className='mb-3 w-100'>
          <input type="text" className='form-control' placeholder='Project Title' />
        </div>
        <div className='mb-3 w-100'>
          <input type="text" className='form-control' placeholder='Project Title' />
        </div>
        <div className='mb-3 w-100'>
          <textarea type="text" className='form-control' placeholder='Project Title' />
        </div>
      </Col>
    </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
