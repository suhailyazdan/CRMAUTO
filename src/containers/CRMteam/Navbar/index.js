import React from 'react'
import {Link} from 'react-router-dom'



const Navbar = () => {

  return (
    <div className='navbar'>  
        <Link to="/crmteam/" className='navItem mb-4'>
          <div className='title'>Dashboard</div>

          <div className='iconCircle ms-auto me-2 d-none d-lg-block'></div>
        </Link>

        <Link to="/crmteam/mytasks" className='navItem mb-4'>
          <div className='title'>My Tasks</div>
          
          <div className='iconCircle ms-auto me-2 d-none d-lg-block' ></div>
        </Link>

        <Link to="/crmteam/customers" className='navItem mb-4'>
          <div className='title'>Customers</div>
        
          <div className='iconCircle ms-auto me-2 d-none d-lg-block'></div>
        </Link>

        <Link to="/crmteam/offers" className='navItem mb-4'>
          <div className='title'>Offers</div>

          <div className='iconCircle ms-auto me-2 d-none d-lg-block'></div>
        </Link>
    </div>
  )
}

export default Navbar