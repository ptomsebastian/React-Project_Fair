import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Auth({ register }) {
  const registerForm = register ? true : false;

  return (
    <>
      <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
        <div className="w-75 container">
          <Link className='fs-5' style={{ color: 'blue', textDecoration: 'none' }} to='/'>
            <i className="fas fa-arrow-right fa-rotate-180 ms-2"></i> Back to Home
          </Link>
          <div className="card bg-success p-5 rounded">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img src="http://www.tropiqana.com/fundsmanager/app-assets/img/gallery/login.png" alt="no image" width={'100%'} />
              </div>
              <div className="col-lg-6">
                <div className='d-flex align-items-center justify-content-center flex-column'>
                  <h1 className='text-light'> <i className="fab fa-stack-overflow fa-2x"></i> Project Fair</h1>
                  <h5 className='text-light ms-5 mt-4'>
                    {registerForm ? "Sign up your account" : "Sign in your account"}
                  </h5>
                  <Form className='mt-5 w-100'>
                    {registerForm &&
                      <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Control type="text" placeholder="Enter username" />
                      </Form.Group>
                    }
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                    {registerForm ?
                        <div className='mt-4'>
                            <button className='btn btn-warning rounded'>
                            Register
                            </button>
                            <p className='text-light'>
                            Already a User? Click here to <Link to={'/login'} style={{ color: 'blue' }}>Login</Link>
                            </p>
                        </div>
                        :
                        <div>
                            <button className='btn btn-warning rounded'>
                            Login
                            </button>
                            <p className='text-light'>
                            New User? Click here to <Link to={'/register'} style={{ color: 'blue' }}>Register</Link>
                            </p>
                        </div>
                        }
     
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
