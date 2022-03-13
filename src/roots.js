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
import MemberDashboard from './containers/CRMteam/MemberDashboard'
import MemberTasks from './containers/CRMteam/MemberTasks'
import MemberCustomers from './containers/CRMteam/MemberCustomers'
import MemberOffers from './containers/CRMteam/MemberOffers'
import MemberProfile from './containers/CRMteam/MemberProfile'
import CustomerDashboard from './containers/Customer/CustomerDashboard'
import CustomerRequest from './containers/Customer/CustomerRequest'
import CustomerOffers from './containers/Customer/Customer Offers'
import CustomerAccount from './containers/Customer/CustomerAccount'


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
          <Route path="/crmteam/" element={<MemberDashboard />} />
          <Route path="/crmteam/mytasks"  element={<MemberTasks />} />
          <Route path="/crmteam/customers" element={<MemberCustomers />} />
          <Route path="/crmteam/offers" element={<MemberOffers />} />
          <Route path="/crmteam/profile" element={<MemberProfile />} />
        </Route>

        <Route path="/customer" element = {<Customer />}>
          <Route path="/customer/" element = {<CustomerDashboard />} />
          <Route path="/customer/sr-request" element = {<CustomerRequest />} />
          <Route path="/customer/offers" element = {<CustomerOffers />} />
          <Route path="/customer/account" element = {<CustomerAccount />} />
        </Route>
      </Routes>
    </>
  )
}

export default Roots