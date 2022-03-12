import {Routes, Route} from 'react-router-dom'
import Login from './containers/Login'
import CRMadmin from './containers/CRMadmin'
import CRMteam from './containers/CRMteam'
import Customer from './containers/Customer'
import AdminDashboard from './containers/CRMadmin/AdminDashboard'
import AdminTasks from './containers/CRMadmin/AdminTasks'
import AdminCustomers from './containers/CRMadmin/AdminCustomers'
import AdminTeam from './containers/CRMadmin/AdminTeam'
import AdminOffers from './containers/CRMadmin/AdminOffers'


const Roots = () => {
  return(
    <>
      <Routes>
        <Route path="/" element = {<Login />} />

        <Route path="/crmadmin" element = {<CRMadmin />}>
          <Route path="/crmadmin/" element = {<AdminDashboard />} />
          <Route path="/crmadmin/tasks" element = {<AdminTasks />} />
          <Route path="/crmadmin/customers" element = {<AdminCustomers />} />
          <Route path="/crmadmin/team" element = {<AdminTeam />} />
          <Route path="/crmadmin/offers" element = {<AdminOffers />} />
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