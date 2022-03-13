import React, {useState} from 'react'
import profilePhoto from '../../../images/profileImage.jpg'

const CustomerAccount = () => {
  let [edit, setEdit] = useState(false)

  return (
    <div>
      <div className='row g-0'>
        <div className='col-6'>
          <h4>Profile</h4>
          <div className='contentCard mx-2' style={{height: "100vh", overflowY: "auto"}}>
            <div className='m-4'>
              <div className='row'>
                <div className='col-4'>
                  <div className='photoBox'>
                    <img src={profilePhoto} alt="CustomerPhoto" />
                  </div>
                </div>

                <div className='col-8'>
                  <div className='d-flex align-items-end justify-content-end h-100'>
                    <button type="button" onClick={() => setEdit(true)}
                      className="btn btn-sm btn-primary mx-2">Edit</button>

                    <button type="button" onClick={() => setEdit(false)}
                      className="btn btn-sm btn-primary mx-2">Save</button>

                    <button type="button" className="btn btn-sm btn-primary ms-2">Delete Account</button>
                  </div>
                </div>
              </div>

              {
                !edit &&
                <div>
                  <ul className="list-group list-group-flush mt-3">
                    <li className="list-group-item">
                      <div className="d-flex align-items-center justify-content-between">
                        <div> <strong>Id No.</strong> : 382938 </div>
                      </div>
                    </li>

                    <li className="list-group-item">
                      <div className="d-flex align-items-center justify-content-between">
                        <div> <strong>Member's Name</strong> : Mark </div>
                      </div>
                    </li>

                    <li className="list-group-item">
                      <div className="d-flex align-items-center justify-content-between">
                        <div> <strong>Phone Number</strong> : 363546454 </div>
                      </div>
                    </li>

                    <li className="list-group-item">
                      <div className="d-flex align-items-center justify-content-between">
                        <div> <strong>Email</strong> : mark@gmail.com </div>
                      </div>
                    </li>

                    <li className="list-group-item">
                      <div className="d-flex align-items-center justify-content-between">
                        <div> <strong>Joining Date</strong> : 05 Nov 2017 </div>
                      </div>
                    </li>

                    <li className="list-group-item">
                      <div className="d-flex align-items-center justify-content-between">
                        <div> <strong>Address</strong> : Indira Nagar, Bangalore </div>
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
                      <label for="inputPassword" class="col-sm-2 col-form-label">Id No.</label>
                      <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" />
                      </div>
                    </div>

                    <div class="mb-3 row">
                      <label for="inputPassword" class="col-sm-4 col-form-label">Customer Name</label>
                      <div class="col-sm-8">
                        <input type="password" class="form-control" id="inputPassword" />
                      </div>
                    </div>

                    <div class="mb-3 row">
                      <label for="inputPassword" class="col-sm-4 col-form-label">Email</label>
                      <div class="col-sm-8">
                        <input type="password" class="form-control" id="inputPassword" />
                      </div>
                    </div>


                    <div className='row'>
                      <div className='col-6'>
                        <div class="mb-3 row">
                          <label for="inputPassword" class="col-sm-5 col-form-label">Car No.</label>
                          <div class="col-sm-7">
                            <input type="password" class="form-control" id="inputPassword" />
                          </div>
                        </div>
                      </div>

                      <div className='col-6'>
                        <div class="mb-3 row">
                          <label for="inputPassword" class="col-sm-5 col-form-label">Phone</label>
                          <div class="col-sm-7">
                            <input type="password" class="form-control" id="inputPassword" />
                          </div>
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
                      <label for="exampleFormControlTextarea1" class="form-label">Address</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                  </form>
                </div>
              }
            </div>
          </div>
        </div>

        <div className='col-6'>
          <h4>Account Details</h4>
          <div className='contentCard mx-2' style={{height: "100vh", overflowY: "auto"}}>
            <div className='m-4'>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div> <strong>account type</strong> : permanent </div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div> <strong>account started</strong> : 2nd Feb 2017 </div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div> <strong>membership</strong> : yes </div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div> <strong>membership end</strong> : 3rd August 2023 </div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div> <strong>pending services</strong> : 6 </div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div> <strong>account type</strong> : permanent </div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div> <strong>account started</strong> : 2nd Feb 2017 </div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div> <strong>membership</strong> : yes </div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div> <strong>membership end</strong> : 3rd August 2023 </div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div> <strong>pending services</strong> : 6 </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerAccount