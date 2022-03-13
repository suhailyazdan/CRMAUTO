import React from 'react'
import { FaClipboardCheck} from 'react-icons/fa';
import { BsArrowClockwise } from 'react-icons/bs'
import { MdMiscellaneousServices, MdLocalOffer } from "react-icons/md";
import { IconContext } from "react-icons";



const CustomerDashboard = () => {
  return (
    <div>
      <div className='row g-0'>
        <div className='col-12'>
          <div className='contentCard mx-2'>
            <div className='row'>
              <div className='col-12'>
                <h3>Customer Name: XYZ </h3>
              </div>

              <div className='col-4'>
                <div>Customer ID : 2347R</div>
                <div>Car No. : XY3948SD</div>
              </div>

              <div className='col-4'>
                <div>Membership : Yes</div>
                <div>Location : Bangalore</div>
              </div>

              <div className='col-4'>
                <div>Next Service : 3rd June 2023</div>
                <div>New Messages : 5</div>
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
                    <MdMiscellaneousServices />
                  </IconContext.Provider>
                  <h5 className='text-center'>Services</h5>
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
                    <MdLocalOffer />
                  </IconContext.Provider>
                  <h5 className='text-center'>Offers</h5>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex bg-primary justify-content-center align-items-center h-100 rounded-3'>
                  <div className='statusCircle'>
                      3
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
                      2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>     
      </div>

      <div className='row g-0 mt-4'>
        <div className='col-6'>
          <h4>Company Messages</h4>
          <div className='contentCard mx-2' style={{height: "500px", overflowY: "auto"}}>
            <div className='m-3'>
              <table className="table table-hover table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">sender</th>
                    <th scope="col">date</th>
                    <th scope="col">subject</th>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='col-6'>
          <h4>News Letters</h4>
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
      </div>
    </div>
  )
}

export default CustomerDashboard