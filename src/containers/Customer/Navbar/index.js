import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>  
        <Link to="/crmadmin/" className='navItem mb-4'>
          <div className='title'>Dashboard</div>

          <div className='iconCircle ms-auto me-2 d-none d-lg-block'></div>
        </Link>

        <Link to="/crmadmin/tasks" className='navItem mb-4'>
          <div className='title'>Service Request</div>
          
          <div className='iconCircle ms-auto me-2 d-none d-lg-block' ></div>
        </Link>

        <Link to="/crmadmin/customers" className='navItem mb-4'>
          <div className='title'>Offers</div>
        
          <div className='iconCircle ms-auto me-2 d-none d-lg-block'></div>
        </Link>

        <Link to="/crmadmin/team" className='navItem mb-4'>
          <div className='title'>Account</div>
          
          <div className='iconCircle ms-auto me-2 d-none d-lg-block'></div>
        </Link>
    </div>
  )
}

export default Navbar