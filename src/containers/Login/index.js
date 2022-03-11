import React from 'react'
import {Link} from 'react-router-dom'
import crmautoLogo from '../../images/crmautoLogo.svg'

const Login = () => {
  return (
    <div className='container-fluid vh-100 loginScreen'>
      <div className='d-flex justify-content-center justify-content-md-end'>
        <div className='logoBox mt-2 me-0 mt-md-5 me-md-5'>
          <img src={crmautoLogo} width="150" alt="CRMAUTO Logo" />
          <h3>CRMAUTO</h3>
        </div>
      </div>

      <div className='row'>
        <div className='offset-2 col-8 offset-md-3 col-md-6 offset-xl-4 col-xl-4'>
          <div className='vh-100'>
            <div className='loginBox'>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <div className='row mt-5'>
                  <div className='col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3'>
                    <Link to="/crmadmin" className="btn btn-primary w-100">CRM Admin</Link>
                  </div>

                  <div className='col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3'>
                    <Link to="/crmteam" className="btn btn-primary w-100 mt-3">CRM Team</Link>
                  </div>

                  <div className='col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3'>
                    <Link to="/customer" className="btn btn-primary w-100 mt-3">Customer</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login