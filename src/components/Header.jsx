import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Header({dashboard}) {
  return (
  <>
        <Navbar className='bg-success'>
        <Container>
          <Navbar.Brand href="#home">
            <Link to={'/'} style={{textDecoration:'none', color:'black'}}>
                <i class='fa-brands fa-stack-overflow fa-3x'></i>
                {' '}
            Project Fair
            </Link>
            
          </Navbar.Brand>
          {dashboard &&
            <button className='btn btn-warning'>Logout  <i class='fa-solid fa-power-off'></i></button>
          }
        </Container>
      </Navbar>
  </>
  )
}
