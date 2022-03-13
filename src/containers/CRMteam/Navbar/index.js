import React from 'react'
import {NavLink} from 'react-router-dom'



const Navbar = () => {

  return (
    <div className='navbar'>  
        <NavLink to="/crmteam/" className={`navItem mb-4 ${(navData) => (navData.isActive ? 'active' : '')}`}>
          <div className='title'>Dashboard</div>

          <div className='iconCircle ms-auto me-2 d-none d-lg-block'></div>
        </NavLink>

        <NavLink to="/crmteam/mytasks" className={`navItem mb-4 ${(navData) => (navData.isActive ? 'active' : '')}`}>
          <div className='title'>My Tasks</div>
          
          <div className='iconCircle ms-auto me-2 d-none d-lg-block' ></div>
        </NavLink>

        <NavLink to="/crmteam/customers" className={`navItem mb-4 ${(navData) => (navData.isActive ? 'active' : '')}`}>
          <div className='title'>Customers</div>
        
          <div className='iconCircle ms-auto me-2 d-none d-lg-block'></div>
        </NavLink>

        <NavLink to="/crmteam/offers" className={`navItem mb-4 ${(navData) => (navData.isActive ? 'active' : '')}`}>
          <div className='title'>Offers</div>

          <div className='iconCircle ms-auto me-2 d-none d-lg-block'></div>
        </NavLink>
    </div>
  )
}

export default Navbar