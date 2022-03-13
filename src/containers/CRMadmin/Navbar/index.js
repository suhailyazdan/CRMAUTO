import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>  
        <NavLink to="/crmadmin/" className={`navItem mb-4 ${(navData) => (navData.isActive ? 'active' : '')}`}>
          <div className='title'>Dashboard</div>

          <div className='iconCircle ms-auto me-2 d-none d-lg-block'></div>
        </NavLink>

        <NavLink to="/crmadmin/tasks" className={`navItem mb-4 ${(navData) => (navData.isActive ? 'active' : '')}`}>
          <div className='title'>Tasks</div>
          
          <div className='iconCircle ms-auto me-2 d-none d-lg-block' ></div>
        </NavLink>

        <NavLink to="/crmadmin/customers" className={`navItem mb-4 ${(navData) => (navData.isActive ? 'active' : '')}`}>
          <div className='title'>Customers</div>
        
          <div className='iconCircle ms-auto me-2 d-none d-lg-block'></div>
        </NavLink>

        <NavLink to="/crmadmin/team" className={`navItem mb-4 ${(navData) => (navData.isActive ? 'active' : '')}`}>
          <div className='title'>CRM Team</div>
          
          <div className='iconCircle ms-auto me-2 d-none d-lg-block'></div>
        </NavLink>

        <NavLink to="/crmadmin/offers" className={`navItem mb-4 ${(navData) => (navData.isActive ? 'active' : '')}`}>
          <div className='title'>New Offers</div>

          <div className='iconCircle ms-auto me-2 d-none d-lg-block'></div>
        </NavLink>
    </div>
  )
}

export default Navbar