import React, {useState} from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
// import { FaEdit} from 'react-icons/fa';

const MemberOffers = () => {
  let [edit, setEdit] = useState(false)

  return (
    <div>
      <div className='row g-0'>
        <div className='col-6'>
          <h4>Ongoing Offers</h4>
          <div className='contentCard mx-2' style={{height: "500px", overflowY: "auto"}}>
            <div className='m-4'>
              <table className="table table-hover table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">title</th>
                    <th scope="col">detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>30% discount</td>
                    <td>Lorem ipsum dolor sit amet</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Free Car Wash</td>
                    <td>Lorem ipsum dolor sit amet</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>3 free services</td>
                    <td>Lorem ipsum dolor sit amet</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='col-6'>
          <h4>Create New Offer</h4>
          <div className='contentCard mx-2' style={{height: "500px", overflowY: "auto"}}>
          <div className='m-4'>
              <Tabs defaultActiveKey="View" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="View" title="View">
                  <div className='row'>
                    <div className='col-12'>
                      <div className='d-flex align-items-end justify-content-end h-100'>
                        <button type="button" onClick={() => setEdit(true)}
                          className="btn btn-sm btn-primary mx-2">Edit</button>

                        <button type="button" onClick={() => setEdit(false)}
                          className="btn btn-sm btn-primary mx-2">Save</button>

                        <button type="button" 
                          className="btn btn-sm btn-primary mx-2">Send Offer to Customers</button>

                        <button type="button" className="btn btn-sm btn-primary ms-2">Delete</button>
                      </div>
                    </div>
                  </div>

                  {
                    !edit &&
                    <div>
                      <ul className="list-group list-group-flush mt-3">
                        <li className="list-group-item">
                          <div className="d-flex align-items-center justify-content-between">
                            <div> <strong>offer id</strong> : edr345 </div>
                          </div>
                        </li>

                        <li className="list-group-item">
                          <div className="d-flex align-items-center justify-content-between">
                            <div> <strong>title</strong> : 30% discount </div>
                          </div>
                        </li>

                        <li className="list-group-item">
                          <div className="d-flex align-items-center justify-content-between">
                            <div> <strong>detail</strong> : Lorem ipsum dolor sit amet </div>
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
                          <label for="inputPassword" class="col-sm-3 col-form-label">Offer Id.</label>
                          <div class="col-sm-9">
                            <input type="password" class="form-control" id="inputPassword" />
                          </div>
                        </div>

                        <div class="mb-3 row">
                          <label for="inputPassword" class="col-sm-4 col-form-label">title</label>
                          <div class="col-sm-8">
                            <input type="password" class="form-control" id="inputPassword" />
                          </div>
                        </div>

                        <div class="mb-3 row">
                          <label for="exampleFormControlTextarea1" class=" col-sm-2 form-label">detail</label>
                          <div class="col-sm-10">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                          </div>
                        </div>
                      </form>
                    </div>
                  }
                </Tab>

                <Tab eventKey="New Offer" title="New Offer">
                  <div className='row'>
                    <div className='col-12'>
                      <div className='d-flex align-items-end justify-content-end h-100'>
                        <button type="button" className="btn btn-sm btn-primary ms-2">Create New Offer</button>
                        <button type="button" className="btn btn-sm btn-primary ms-2">Reset</button>
                      </div>
                    </div>
                  </div>

                  <div>
                      <form className='mt-3'>
                        <div class="mb-3 row">
                          <label for="inputPassword" class="col-sm-3 col-form-label">Offer Id.</label>
                          <div class="col-sm-9">
                            <input type="password" class="form-control" id="inputPassword" />
                          </div>
                        </div>

                        <div class="mb-3 row">
                          <label for="inputPassword" class="col-sm-4 col-form-label">title</label>
                          <div class="col-sm-8">
                            <input type="password" class="form-control" id="inputPassword" />
                          </div>
                        </div>

                        <div class="mb-3 row">
                          <label for="exampleFormControlTextarea1" class=" col-sm-2 form-label">detail</label>
                          <div class="col-sm-10">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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

      <div className='row g-0 mt-3'>
        <div className='col-6'>
          <h4>Previous News Letters</h4>
          <div className='contentCard mx-2' style={{height: "500px", overflowY: "auto"}}>
            <div className='m-4'>
              <table className="table table-hover table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">date</th>
                    <th scope="col">Headline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>3rd Sep 2021</td>
                    <td>Lorem ipsum dolor sit amet</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>4th Oct 2021</td>
                    <td>Lorem ipsum dolor sit amet</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>5th Nov 2021</td>
                    <td>Lorem ipsum dolor sit amet</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='col-6'>
          <h4>New News Letter</h4>
          <div className='contentCard mx-2' style={{height: "500px", overflowY: "auto"}}>
          <div className='m-4'>
              <Tabs defaultActiveKey="View" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="View" title="View">
                  <div className='row'>
                    <div className='col-12'>
                      <div className='d-flex align-items-end justify-content-end h-100'>
                        <button type="button" onClick={() => setEdit(true)}
                          className="btn btn-sm btn-primary mx-2">Edit</button>

                        <button type="button" onClick={() => setEdit(false)}
                          className="btn btn-sm btn-primary mx-2">Save</button>

                        <button type="button" 
                          className="btn btn-sm btn-primary mx-2">Send Offer to Customers</button>

                        <button type="button" className="btn btn-sm btn-primary ms-2">Delete</button>
                      </div>
                    </div>
                  </div>

                  {
                    !edit &&
                    <div>
                      <ul className="list-group list-group-flush mt-3">
                        <li className="list-group-item">
                          <div className="d-flex align-items-center justify-content-between">
                            <div> <strong>letter id</strong> : edr345 </div>
                          </div>
                        </li>

                        <li className="list-group-item">
                          <div className="d-flex align-items-center justify-content-between">
                            <div> <strong>date</strong> : 6th Nov 2021 </div>
                          </div>
                        </li>

                        <li className="list-group-item">
                          <div className="d-flex align-items-center justify-content-between">
                            <div> <strong>headline</strong> : Lorem ipsum dolor sit amet </div>
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
                          <label for="inputPassword" class="col-sm-3 col-form-label">letter id</label>
                          <div class="col-sm-9">
                            <input type="password" class="form-control" id="inputPassword" />
                          </div>
                        </div>

                        <div class="mb-3 row">
                          <label for="inputPassword" class="col-sm-4 col-form-label">date</label>
                          <div class="col-sm-8">
                            <input type="password" class="form-control" id="inputPassword" />
                          </div>
                        </div>

                        <div class="mb-3 row">
                          <label for="exampleFormControlTextarea1" class=" col-sm-2 form-label">Headline</label>
                          <div class="col-sm-10">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                          </div>
                        </div>
                      </form>
                    </div>
                  }
                </Tab>

                <Tab eventKey="New Letter" title="New Letter">
                  <div className='row'>
                    <div className='col-12'>
                      <div className='d-flex align-items-end justify-content-end h-100'>
                        <button type="button" className="btn btn-sm btn-primary ms-2">Create New letter</button>
                        <button type="button" className="btn btn-sm btn-primary ms-2">Reset</button>
                      </div>
                    </div>
                  </div>

                    <div>
                      <form className='mt-3'>
                        <div class="mb-3 row">
                          <label for="inputPassword" class="col-sm-3 col-form-label">letter id</label>
                          <div class="col-sm-9">
                            <input type="password" class="form-control" id="inputPassword" />
                          </div>
                        </div>

                        <div class="mb-3 row">
                          <label for="inputPassword" class="col-sm-4 col-form-label">date</label>
                          <div class="col-sm-8">
                            <input type="password" class="form-control" id="inputPassword" />
                          </div>
                        </div>

                        <div class="mb-3 row">
                          <label for="exampleFormControlTextarea1" class=" col-sm-2 form-label">Headline</label>
                          <div class="col-sm-10">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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

export default MemberOffers