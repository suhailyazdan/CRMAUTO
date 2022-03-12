import React from 'react'
import { FaDiscourse, FaBuffer} from 'react-icons/fa';
import { BsArrowClockwise } from 'react-icons/bs'
import { IconContext } from "react-icons";

const AdminDashboard = () => {
  return (
    <div>
      <div className='row g-0'>
        <div className='col-12'>
          <div className='contentCard mx-2'>
            <div className='row'>
              <div className='col-12'>
                <h3>Admin Name: XYZ </h3>
              </div>

              <div className='col-4'>
                <div>Manager ID : 2347R</div>
                <div>ID : XY3948SD</div>
              </div>

              <div className='col-4'>
                <div>Team Members : 105</div>
                <div>Location : Bangalore234</div>
              </div>

              <div className='col-4'>
                <div>Office ID : bang-kar-342</div>
                <div>Customers : 2302</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='row g-0 mt-4'>
        <div className='col-4'>
          <div className='contentCard mx-2' style={{height: "200px"}}>
            <div className='row h-100'>
              <div className='col-6'>
                <div className='d-flex flex-column justify-content-around align-items-center h-100'>
                  <IconContext.Provider value={{ size: "60%", color: "red" }}>
                    <FaDiscourse />
                  </IconContext.Provider>
                  <h5 className='text-center'>Requests</h5>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex bg-primary justify-content-center align-items-center h-100 rounded-3'>
                  <div className='statusCircle'>
                      25
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-4'>
          <div className='contentCard mx-2' style={{height: "200px"}}>
            <div className='row h-100'>
              <div className='col-6'>
                <div className='d-flex flex-column justify-content-around align-items-center h-100'>
                  <IconContext.Provider value={{ size: "60%", color: "red" }}>
                    <FaBuffer />
                  </IconContext.Provider>
                  <h5 className='text-center'>Pending</h5>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex bg-primary justify-content-center align-items-center h-100 rounded-3'>
                  <div className='statusCircle'>
                      13
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-4'>
          <div className='contentCard mx-2' style={{height: "200px"}}>
            <div className='row h-100'>
              <div className='col-6'>
                <div className='d-flex flex-column justify-content-around align-items-center h-100'>
                  <IconContext.Provider value={{ size: "60%", color: "red" }}>
                    <BsArrowClockwise />
                  </IconContext.Provider>
                  <h5 className='text-center'>Progress</h5>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex bg-primary justify-content-center align-items-center h-100 rounded-3'>
                  <div className='statusCircle'>
                      75
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>     
      </div>

      <div className='row g-0 mt-4'>
        <div className='col-6'>
          <h4>Tasks In Progress</h4>
          <div className='contentCard mx-2' style={{height: "400px", overflowY: "auto"}}>
            <div className='m-3'>
              <table className="table table-hover table-sm">
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
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='col-6'>
          <h4>New Requests</h4>
          <div className='contentCard mx-2' style={{height: "400px"}}>
            <div className='m-3'>
              <table className="table table-hover table-sm">
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard