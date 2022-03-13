import React, {useState} from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const AdminTasks = () => {
  let [edit, setEdit] = useState(false)
  return (
    <div>
      <div className='row g-0'>
        <div className='col-6'>
          <h4>Search Tasks</h4>
          <div className='contentCard mx-2' style={{height: "100vh", overflowY: "auto"}}>
            <div className='m-4'>
              <form>
                <div className="mb-3">
                  <label htmlFor="customerName" className="form-label">Customer Name / Task No. / Team Member</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">By Date</label>
                  <input type="text" className="form-control" />
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
                    <th scope="col">task No.</th>
                    <th scope="col">details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>23456</td>
                    <td>Replace the tyre</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>25165</td>
                    <td>Full body wash</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Robinson</td>
                    <td>44356</td>
                    <td>Fix the Engine</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Mark</td>
                    <td>23456</td>
                    <td>Replace the tyre</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Jacob</td>
                    <td>25165</td>
                    <td>Full body wash</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Robinson</td>
                    <td>44356</td>
                    <td>Fix the Engine</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Mark</td>
                    <td>23456</td>
                    <td>Replace the tyre</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Jacob</td>
                    <td>25165</td>
                    <td>Full body wash</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>Robinson</td>
                    <td>44356</td>
                    <td>Fix the Engine</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='col-6'>
          <h4>View, Edit &amp; Create Tasks</h4>
          <div className='contentCard mx-2' style={{height: "100vh", overflowY: "auto"}}>
            <div className='m-4'>
              <Tabs defaultActiveKey="View" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="View" title="View">
                  <div className='d-flex align-items-center justify-content-end'>
                    <button type="button" onClick = {() => setEdit(true)}
                      className="btn btn-sm btn-primary mx-2">Edit</button>
                    <button type="button" onClick = {() => setEdit(false)}
                      className="btn btn-sm btn-primary mx-2">Save</button>
                    <button type="button" className="btn btn-sm btn-primary ms-2">Delete Task</button>
                  </div>

                  {
                    !edit &&
                    <div>
                      <ul className="list-group list-group-flush mt-3">
                        <li className="list-group-item">
                          <div className="d-flex align-items-center justify-content-between">
                            <div> <strong>task No.</strong> : 25165 </div>
                          </div>
                        </li>

                        <li className="list-group-item">
                          <div className="d-flex align-items-center justify-content-between">
                            <div> <strong>Customer Name</strong> : Mark </div>
                          </div>
                        </li>

                        <li className="list-group-item">
                          <div className="d-flex align-items-center justify-content-between">
                            <div> <strong>Details</strong> : Full Body Wash </div>
                          </div>
                        </li>
                        
                        <li className="list-group-item">
                          <div className="d-flex align-items-center justify-content-between">
                            <div> <strong>Location</strong> : Bangalore </div>
                          </div>
                        </li>

                        <li className="list-group-item">
                          <div className="d-flex align-items-center justify-content-between">
                            <div> <strong>Address</strong> : Bangalore </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  }

                  {
                    edit &&
                    <div>
                      <form className='mt-3'>
                        <div class="mb-3 row">
                          <label for="inputPassword" class="col-sm-3 col-form-label">task No.</label>
                          <div class="col-sm-9">
                            <input type="password" class="form-control" id="inputPassword" />
                          </div>
                        </div>

                        <div class="mb-3 row">
                          <label for="inputPassword" class="col-sm-4 col-form-label">Customer Name</label>
                          <div class="col-sm-8">
                            <input type="password" class="form-control" id="inputPassword" />
                          </div>
                        </div>

                        <div class="mb-3">
                          <label for="exampleFormControlTextarea1" class="form-label">Details</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                        </div>

                        <div class="mb-3 row">
                          <label for="inputPassword" class="col-sm-4 col-form-label">Location</label>
                          <div class="col-sm-8">
                            <input type="password" class="form-control" id="inputPassword" />
                          </div>
                        </div>

                        <div class="mb-3 row">
                          <label for="inputPassword" class="col-sm-4 col-form-label">Address</label>
                          <div class="col-sm-8">
                            <input type="password" class="form-control" id="inputPassword" />
                          </div>
                        </div>
                      </form>
                    </div>
                  }
                </Tab>

                <Tab eventKey="Create" title="Create">
                  <div className='d-flex align-items-center justify-content-end'>
                    <button type="button" className="btn btn-sm btn-primary ms-2">Create New Task</button>
                  </div>

                  <div>
                    <form className='mt-3'>
                      <div class="mb-3 row">
                        <label for="inputPassword" class="col-sm-3 col-form-label">task No.</label>
                        <div class="col-sm-9">
                          <input type="password" class="form-control" id="inputPassword" />
                        </div>
                      </div>

                      <div class="mb-3 row">
                        <label for="inputPassword" class="col-sm-4 col-form-label">Customer Name</label>
                        <div class="col-sm-8">
                          <input type="password" class="form-control" id="inputPassword" />
                        </div>
                      </div>

                      <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Details</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                      </div>

                      <div class="mb-3 row">
                        <label for="inputPassword" class="col-sm-4 col-form-label">Location</label>
                        <div class="col-sm-8">
                          <input type="password" class="form-control" id="inputPassword" />
                        </div>
                      </div>

                      <div class="mb-3 row">
                        <label for="inputPassword" class="col-sm-4 col-form-label">Address</label>
                        <div class="col-sm-8">
                          <input type="password" class="form-control" id="inputPassword" />
                        </div>
                      </div>
                    </form>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminTasks