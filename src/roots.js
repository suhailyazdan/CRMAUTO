import {Routes, Route} from 'react-router-dom'
import Login from './containers/Login'
import CRMadmin from './containers/CRMadmin'
import CRMteam from './containers/CRMteam'
import Customer from './containers/Customer'

const Roots = () => {
  return(
    <>
      <Routes>
        <Route path="/" element = {<Login />} />

        <Route path="/crmadmin" element = {<CRMadmin />}>
        </Route>

        <Route path="/crmteam" element = {<CRMteam />}>
        </Route>

        <Route path="/customer" element = {<Customer />}>
        </Route>

      </Routes>
    </>
  )
}

export default Roots