import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { FaEdit} from 'react-icons/fa';

const AdminCustomers = () => {
  return (
    <div>
      <div className='row g-0'>
        <div className='col-6'>
          <h4>Search Customers</h4>
          <div className='contentCard mx-2' style={{height: "100vh", overflowY: "auto"}}>
            <div className='m-4'>
              <form>
                <div className="mb-3">
                  <label htmlFor="customerName" className="form-label">Customer Name / Mobile / Email</label>
                  <input type="text" className="form-control" />
                </div>

                
                <div className="row">
                  <div className='col-6'>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Date of Birth</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>

                  <div className='col-6'>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Date of Joinig</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>


                <div className='row'>
                  <div className='col-4'>
                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">New</label>
                    </div>
                  </div>

                  <div className='col-4'>
                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">Previous</label>
                    </div>
                  </div>

                  <div className='col-4'>
                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">Current</label>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100">Search</button>
              </form>

              <table className="table table-hover table-sm mt-3">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">customer</th>
                    <th scope="col">phone</th>
                    <th scope="col">email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>2345634561</td>
                    <td>mark@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>2516587162</td>
                    <td>jacob@yahoo.com</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Robinson</td>
                    <td>4435676354</td>
                    <td>robin@email.com</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Mark</td>
                    <td>2345634561</td>
                    <td>mark@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Jacob</td>
                    <td>2516587162</td>
                    <td>jacob@yahoo.com</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Robinson</td>
                    <td>4435676354</td>
                    <td>robin@email.com</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Mark</td>
                    <td>2345634561</td>
                    <td>mark@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Jacob</td>
                    <td>2516587162</td>
                    <td>jacob@yahoo.com</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>Robinson</td>
                    <td>4435676354</td>
                    <td>robin@email.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='col-6'>
          <h4>View, Edit &amp; Create Customers</h4>
          <div className='contentCard mx-2' style={{height: "100vh", overflowY: "auto"}}>
            <div className='m-4'>
            <Tabs defaultActiveKey="View" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="View" title="View">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="d-flex align-items-center justify-content-between">
                      <div> Task No. : 3 </div>
                      <button type="button" className="btn btn-primary ms-auto">edit</button>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="d-flex align-items-center justify-content-between">
                      <div> Customer Name : Mark </div>
                      <button type="button" className="btn btn-primary ms-auto">edit</button>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="d-flex align-items-center justify-content-between">
                      <div> Task No. : 25165 </div>
                      <button type="button" className="btn btn-primary ms-auto">edit</button>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="d-flex align-items-center justify-content-between">
                      <div> Details : Full Body Wash </div>
                      <button type="button" className="btn btn-primary ms-auto">edit</button>
                    </div>
                  </li>
                  
                  <li className="list-group-item">
                    <div className="d-flex align-items-center justify-content-between">
                      <div> Location : Bangalore </div>
                      <button type="button" className="btn btn-primary ms-auto">edit</button>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="d-flex align-items-center justify-content-between">
                      <div> Address : Bangalore </div>
                      <button type="button" className="btn btn-primary ms-auto">edit</button>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="d-flex align-items-center justify-content-between">
                      <div> Customer Name : Mark </div>
                      <button type="button" className="btn btn-primary ms-auto">edit</button>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="d-flex align-items-center justify-content-between">
                      <div> Task No. : 25165 </div>
                      <button type="button" className="btn btn-primary ms-auto">edit</button>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="d-flex align-items-center justify-content-between">
                      <div> Details : Full Body Wash </div>
                      <button type="button" className="btn btn-primary ms-auto">edit</button>
                    </div>
                  </li>
                  
                  <li className="list-group-item">
                    <div className="d-flex align-items-center justify-content-between">
                      <div> Location : Bangalore </div>
                      <button type="button" className="btn btn-primary ms-auto">edit</button>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="d-flex align-items-center justify-content-between">
                      <div> Address : Bangalore </div>
                      <button type="button" className="btn btn-primary ms-auto">edit</button>
                    </div>
                  </li>
                </ul>
              </Tab>

              <Tab eventKey="Create" title="Create">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Task id</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Select Customer</label>
                    <select class="form-select mb-3" aria-label=".form-select-lg example">
                      <option selected>Select Name</option>
                      <option value="1">Mark</option>
                      <option value="2">Jacob</option>
                      <option value="3">Robinson</option>
                    </select>
                  </div>

                  <div className='row'>
                    <div className='col-6'>
                      <div className="mb-3">
                        <label className="form-label">Car No.</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className='col-6'>
                      <div className="mb-3">
                        <label className="form-label">Date of Purchase</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>


                  <div className='row'>
                    <div className='col-4'>
                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">New</label>
                      </div>
                    </div>

                    <div className='col-4'>
                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Old</label>
                      </div>
                    </div>

                    <div className='col-4'>
                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Very Old</label>
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Details</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">Create Task</button>
                </form>
              </Tab>
            </Tabs>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminCustomers