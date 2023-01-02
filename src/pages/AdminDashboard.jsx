import React from "react";

const AdminDashboard = () => {
  return (
    <React.Fragment>
      <div className='content container-fluid'>
        <div className='page-header'>
          <div className='row'>
            <div className='col-sm-12'>
              <h3 className='page-title'>Welcome Admin!</h3>
              <ul className='breadcrumb'>
                <li className='breadcrumb-item active'>Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-3 col-sm-6 col-12 d-flex'>
            <div className='card bg-one w-100'>
              <div className='card-body'>
                <div className='db-widgets d-flex justify-content-between align-items-center'>
                  <div className='db-icon'>
                    <i className='fas fa-user-graduate' />
                  </div>
                  <div className='db-info'>
                    <h3>50055</h3>
                    <h6>Students</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-sm-6 col-12 d-flex'>
            <div className='card bg-two w-100'>
              <div className='card-body'>
                <div className='db-widgets d-flex justify-content-between align-items-center'>
                  <div className='db-icon'>
                    <i className='fas fa-crown' />
                  </div>
                  <div className='db-info'>
                    <h3>50+</h3>
                    <h6>Awards</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-sm-6 col-12 d-flex'>
            <div className='card bg-three w-100'>
              <div className='card-body'>
                <div className='db-widgets d-flex justify-content-between align-items-center'>
                  <div className='db-icon'>
                    <i className='fas fa-building' />
                  </div>
                  <div className='db-info'>
                    <h3>30+</h3>
                    <h6>Department</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-sm-6 col-12 d-flex'>
            <div className='card bg-four w-100'>
              <div className='card-body'>
                <div className='db-widgets d-flex justify-content-between align-items-center'>
                  <div className='db-icon'>
                    <i className='fas fa-file-invoice-dollar' />
                  </div>
                  <div className='db-info'>
                    <h3>$505</h3>
                    <h6>Revenue</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 col-lg-6'>
            <div className='card card-chart'>
              <div className='card-header'>
                <div className='row align-items-center'>
                  <div className='col-6'>
                    <h5 className='card-title'>Revenue</h5>
                  </div>
                  <div className='col-6'>
                    <ul className='list-inline-group text-right mb-0 pl-0'>
                      <li className='list-inline-item'>
                        <div className='form-group mb-0 amount-spent-select'>
                          <select className='form-control form-control-sm'>
                            <option>Today</option>
                            <option>Last Week</option>
                            <option>Last Month</option>
                          </select>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='card-body'>
                <div id='apexcharts-area' />
              </div>
            </div>
          </div>
          <div className='col-md-12 col-lg-6'>
            <div className='card card-chart'>
              <div className='card-header'>
                <div className='row align-items-center'>
                  <div className='col-6'>
                    <h5 className='card-title'>Number of Students</h5>
                  </div>
                  <div className='col-6'>
                    <ul className='list-inline-group text-right mb-0 pl-0'>
                      <li className='list-inline-item'>
                        <div className='form-group mb-0 amount-spent-select'>
                          <select className='form-control form-control-sm'>
                            <option>Today</option>
                            <option>Last Week</option>
                            <option>Last Month</option>
                          </select>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='card-body'>
                <div id='bar' />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 d-flex'>
            <div className='card flex-fill'>
              <div className='card-header'>
                <h5 className='card-title'>Star Students</h5>
              </div>
              <div className='card-body'>
                <div className='table-responsive'>
                  <table className='table table-hover table-center'>
                    <thead className='thead-light'>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th className='text-center'>Marks</th>
                        <th className='text-center'>Percentage</th>
                        <th className='text-right'>Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='text-nowrap'>
                          <div>PRE2209</div>
                        </td>
                        <td className='text-nowrap'>John Smith</td>
                        <td className='text-center'>1185</td>
                        <td className='text-center'>98%</td>
                        <td className='text-right'>
                          <div>2019</div>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-nowrap'>
                          <div>PRE1245</div>
                        </td>
                        <td className='text-nowrap'>Jolie Hoskins</td>
                        <td className='text-center'>1195</td>
                        <td className='text-center'>99.5%</td>
                        <td className='text-right'>
                          <div>2018</div>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-nowrap'>
                          <div>PRE1625</div>
                        </td>
                        <td className='text-nowrap'>Pennington Joy</td>
                        <td className='text-center'>1196</td>
                        <td className='text-center'>99.6%</td>
                        <td className='text-right'>
                          <div>2017</div>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-nowrap'>
                          <div>PRE2516</div>
                        </td>
                        <td className='text-nowrap'>Millie Marsden</td>
                        <td className='text-center'>1187</td>
                        <td className='text-center'>98.2%</td>
                        <td className='text-right'>
                          <div>2016</div>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-nowrap'>
                          <div>PRE2209</div>
                        </td>
                        <td className='text-nowrap'>John Smith</td>
                        <td className='text-center'>1185</td>
                        <td className='text-center'>98%</td>
                        <td className='text-right'>
                          <div>2015</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 d-flex'>
            <div className='card flex-fill'>
              <div className='card-header'>
                <h5 className='card-title'>Student Activity</h5>
              </div>
              <div className='card-body'>
                <ul className='activity-feed'>
                  <li className='feed-item'>
                    <div className='feed-date'>Apr 13</div>
                    <span className='feed-text'>
                      <a>John Doe</a> won 1st place in <a>"Chess"</a>
                    </span>
                  </li>
                  <li className='feed-item'>
                    <div className='feed-date'>Mar 21</div>
                    <span className='feed-text'>
                      <a>Justin Lee</a> participated in
                      <a href='invoice.html'>"Carrom"</a>
                    </span>
                  </li>
                  <li className='feed-item'>
                    <div className='feed-date'>Feb 2</div>
                    <span className='feed-text'>
                      <a>Justin Lee</a>attended internation conference in
                      <a href='profile.html'>"St.John School"</a>
                    </span>
                  </li>
                  <li className='feed-item'>
                    <div className='feed-date'>Apr 13</div>
                    <span className='feed-text'>
                      <a>John Doe</a> won 1st place in <a>"Chess"</a>
                    </span>
                  </li>
                  <li className='feed-item'>
                    <div className='feed-date'>Mar 21</div>
                    <span className='feed-text'>
                      <a>Justin Lee</a> participated in
                      <a href='invoice.html'>"Carrom"</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-3 col-sm-6 col-12'>
            <div className='card flex-fill fb sm-box'>
              <i className='fab fa-facebook' />
              <h6>50,095</h6>
              <p>Likes</p>
            </div>
          </div>
          <div className='col-xl-3 col-sm-6 col-12'>
            <div className='card flex-fill twitter sm-box'>
              <i className='fab fa-twitter' />
              <h6>48,596</h6>
              <p>Follows</p>
            </div>
          </div>
          <div className='col-xl-3 col-sm-6 col-12'>
            <div className='card flex-fill insta sm-box'>
              <i className='fab fa-instagram' />
              <h6>52,085</h6>
              <p>Follows</p>
            </div>
          </div>
          <div className='col-xl-3 col-sm-6 col-12'>
            <div className='card flex-fill linkedin sm-box'>
              <i className='fab fa-linkedin-in' />
              <h6>69,050</h6>
              <p>Follows</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AdminDashboard;
