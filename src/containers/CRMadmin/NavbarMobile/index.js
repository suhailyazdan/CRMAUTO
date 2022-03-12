import React, {useEffect, useState} from 'react'
import { FaBars } from 'react-icons/fa';
// import logo from '../../images/crmautoLogo.png'
import logo from '../../../images/crmautoLogo.png'
import { Link } from 'react-router-dom'

const NavbarMobile = () => {
  const [btnClicked, setBtnClicked] = useState(false)

  useEffect(()=>{
    console.log("btnClicked", btnClicked)
  }, [])
  
    
  return (
    <div className='navbarMobile d-flex align-items-center justify-content-start'>
      <button type="button" className="btn ms-2" onClick={() => setBtnClicked(btnClicked => !btnClicked)}>
        <FaBars />
      </button>

      <div className='ms-2'>CRM Admin</div>

      <div className='ms-auto'>
        <div className='logoMobile me-3'>
          <Link to="/" className="btn btn-primary btn-sm me-2">Logout</Link>
          <img src={logo} alt="CRMAUTO logo" style={{width: "50px"}} />
        </div>
      </div>

      {
      btnClicked && 
        <div className='mobileMenu'>
          <Link to="/crmadmin/" className='navItemMobile mb-2' onClick={() => {setBtnClicked(false)}}>
            <div className='title'>Dashboard</div>
            <div className='iconCircle ms-auto me-2'></div>
          </Link>

          <Link to="/crmadmin/tasks" className='navItemMobile mb-2' onClick={() => {setBtnClicked(false)}}>
            <div className='title'>Tasks</div>         
            <div className='iconCircle ms-auto me-2'></div>
          </Link>

          <Link to="/crmadmin/customers" className='navItemMobile mb-2' onClick={() => {setBtnClicked(false)}}>
            <div className='title'>Customers</div>
            <div className='iconCircle ms-auto me-2'></div>
          </Link>

          <Link to="/crmadmin/team" className='navItemMobile mb-2' onClick={() => {setBtnClicked(false)}}>
            <div className='title'>CRM Team</div>
            <div className='iconCircle ms-auto me-2'></div>
          </Link>

          <Link to="/crmadmin/offers" className='navItemMobile mb-2' onClick={() => {setBtnClicked(false)}}>
            <div className='title'>New Offers</div>
            <div className='iconCircle ms-auto me-2'></div>
          </Link>
        </div>
      }
    </div>
  )
}

export default NavbarMobile