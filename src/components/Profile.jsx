import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';

export default function Profile() {
    const [open, setOpen] = useState(false);

    return (
        <div className='card shadow p-5'>
          <div className='d-flex justify-content-between'>
            <h3>Profile</h3>
            <button onClick={() => setOpen(!open)} className='btn btn-outline-info'><i className="fa-solid fa-angle-down"></i></button>
          </div>
          <Collapse in={open}>
              <div className='row justify-content-center mt-4'>
                <label className='text-center'>
                  <input id='profile' type="file" style={{ display: 'none' }} />
                  <img
                    style={{ width: '200px', height: '200px' }}
                    src="https://www.freeiconspng.com/uploads/female-user-icon-clip-art--30.png"
                    alt="no image"
                    className='rounded-circle'
                  />
                 
                </label>
                <div className="mb-3 mt-4">
                  <input type="text" placeholder='GitHub' className='form-control' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='LinkedIn' className='form-control' />
                </div>
                <div className="mb-3 mt-3">
                  <button className='btn btn-success rounded w-100'>Update</button>
                </div>
              </div>
          </Collapse>
        </div>
      );
      
}
