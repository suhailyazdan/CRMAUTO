import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='container-fluid vh-100 loginScreen'>
      <div className='row'>
        <div className='col-4 offset-4'>
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
                <div className='col-4'>
                  <Link to="/crmadmin" className="btn btn-primary w-100">CRM Admin</Link>
                </div>

                <div className='col-4'>
                  <Link to="/crmteam" className="btn btn-primary w-100">CRM Team</Link>
                </div>

                <div className='col-4'>
                  <Link to="/customer" className="btn btn-primary w-100">Customer</Link>
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