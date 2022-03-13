import React from 'react'
import Navbar from "./Navbar"
import NavbarMobile from "./NavbarMobile"
import logo from '../../images/crmautoLogo.png'
import { Outlet, Link } from 'react-router-dom'

const Customer = () => {
  return (
    <div className='glassWrapper bg-blue'>
      <div className="glassContainer">
        <div className='d-block d-sm-none'>
          <div className='row'>
            <div className='col-12'>
              <NavbarMobile />
            </div>

            <div className='col-12'>
              <div className='p-3'>
                <Outlet />
              </div>
            </div>
          </div>
        </div>

        <div className='d-none d-sm-block h-100'>
          <div className='w-25 h-100 float-start'>
            <div className="leftPanel py-3">
              <div className='d-flex flex-column align-items-center justify-content-center p-3 text-center'>
                <div className='inLogoBox d-flex align-items-center justify-content-center mb-2'>
                  <img src={logo} alt="CRMAUTO logo" style={{width: "75%", height: "55%", marginRight: "4px"}} />
                </div>
                <h5 className='d-md-none'>CRMAUTO</h5>
                <h3 className='d-none d-md-block'>CRMAUTO</h3>

                <div className='d-flex flex-column flex-lg-row align-items-center justify-content-between w-100 my-1 my-md-3'>
                  <h6 className='m-0'>Customer</h6>
                  <Link to="/" className="btn btn-primary m-0 mt-3 mt-lg-0">Logout</Link>
                </div>
              </div>
              <Navbar />
            </div>
          </div>

          <div className='w-75 h-100 float-start p-4'>
            <div style={{height: "100%", overflowY: "auto"}}>
              <Outlet />
            </div>
          </div>

          <div style={{clear: "both"}}></div>
        </div>
      </div>
    </div>
  )
}

export default Customer