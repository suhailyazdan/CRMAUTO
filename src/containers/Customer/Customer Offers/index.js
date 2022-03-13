import React from 'react'

const CustomerOffers = () => {
  return (
    <div>
      <div className='row g-0'>
        <div className='col-6'>
          <h4>Offers</h4>
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
          <h4>Offer Detail</h4>
          <div className='contentCard mx-2' style={{height: "500px", overflowY: "auto"}}>
            <div className='m-4'>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerOffers