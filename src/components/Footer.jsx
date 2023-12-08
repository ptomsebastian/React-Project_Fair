import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div style={{ width: '100%', height: '300px' }} className='d-flex justify-content-center align-items-center flex-column mt-5 bg-success'>
    <div className="footer d-flex justify-content-evenly align-items-center w-100">
      <div className="website" style={{ width: '400px' }}>
      <h4><i className="fa-solid fa-video fa-beat text-warning me-4"></i>{''}
        Video Player</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit velit placeat quasi animi maxime natus vero aspernatur blanditiis magni, molestias.</p>
        <p>Similique? Nesciunt, aspernatur?</p>
      </div>
      <div className="links d-flex flex-column">
      <h4>Links</h4>
      <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Landing Page</Link>
      <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Home Page</Link>
      <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>Login Page</Link>
      <Link to={'/register'} style={{ textDecoration: 'none', color: 'white' }}>Registration Page</Link>
    </div>
      <div className="guides d-flex flex-column">
      <h4>Guides</h4>
      <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}>React</Link>
      <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}>React</Link>
      <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}>Bootswatch</Link>
    </div>
      <div className="contact">
        <h4 className='mb-3'>Contact Us</h4>
        <div className='d-flex mb-4'>
          <input className="form-control" type='text' placeholder='Enter email'></input>
          <button className='btn btn-warning text-white ms-2'>Subscribe</button>
          </div>
          <div className="icons d-flex justify-content-evenly">
      <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-instagram fa-2x"></i></Link>
      <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-twitter fa-2x"></i></Link>
      <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook fa-2x"></i></Link>
    </div>
      </div>
      
    </div>
    <p>Copyright © 2023 Media Player. Built with React.</p>
  </div>
  )
}
