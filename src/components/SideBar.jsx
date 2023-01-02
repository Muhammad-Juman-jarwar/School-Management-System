import React from "react";
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Scrollbars from "react-custom-scrollbars-2";

const SideBar = () => {

  return (
    <React.Fragment>
      <div className='sidebar' id='sidebar'>
        <Scrollbars>
          <div className='sidebar-inner'>
            <div id='sidebar-menu' className='sidebar-menu'>
              <ul>
                <li className='menu-title'>
                  <span>Main Menu</span>
                </li>
                <li className='submenu active'>
                  <a href='#'>
                    <i className='fas fa-user-graduate' />
                    <span> Dashboard</span>
                    <span className='menu-arrow' />
                  </a>
                  <ul>
                    <li>
                      <a href='index.html' className='active'>
                        Admin Dashboard
                      </a>
                    </li>
                    <li>
                      <a href='teacher-dashboard.html'>Teacher Dashboard</a>
                    </li>
                    <li>
                      <a href='student-dashboard.html'>Student Dashboard</a>
                    </li>
                  </ul>
                </li>
                <li className='submenu'>
                  <a href='#'>
                    <i className='fas fa-user-graduate' />
                    <span> Students</span>
                    <span className='menu-arrow' />
                  </a>
                  <ul>
                    <li>
                      <a href='students.html'>Student List</a>
                    </li>
                    <li>
                      <a href='student-details.html'>Student View</a>
                    </li>
                    <li>
                      <a href='add-student.html'>Student Add</a>
                    </li>
                    <li>
                      <a href='edit-student.html'>Student Edit</a>
                    </li>
                  </ul>
                </li>
                <li className='submenu'>
                  <a href='#'>
                    <i className='fas fa-chalkboard-teacher' />
                    <span> Teachers</span> <span className='menu-arrow' />
                  </a>
                  <ul>
                    <li>
                      <a href='teachers.html'>Teacher List</a>
                    </li>
                    <li>
                      <a href='teacher-details.html'>Teacher View</a>
                    </li>
                    <li>
                      <a href='add-teacher.html'>Teacher Add</a>
                    </li>
                    <li>
                      <a href='edit-teacher.html'>Teacher Edit</a>
                    </li>
                  </ul>
                </li>
                <li className='submenu'>
                  <a href='#'>
                    <i className='fas fa-building' /> <span> Departments</span>
                    <span className='menu-arrow' />
                  </a>
                  <ul>
                    <li>
                      <a href='departments.html'>Department List</a>
                    </li>
                    <li>
                      <a href='add-department.html'>Department Add</a>
                    </li>
                    <li>
                      <a href='edit-department.html'>Department Edit</a>
                    </li>
                  </ul>
                </li>
                <li className='submenu'>
                  <a href='#'>
                    <i className='fas fa-book-reader' /> <span> Subjects</span>
                    <span className='menu-arrow' />
                  </a>
                  <ul>
                    <li>
                      <a href='subjects.html'>Subject List</a>
                    </li>
                    <li>
                      <a href='add-subject.html'>Subject Add</a>
                    </li>
                    <li>
                      <a href='edit-subject.html'>Subject Edit</a>
                    </li>
                  </ul>
                </li>
                <li className='menu-title'>
                  <span>Management</span>
                </li>
                <li className='submenu'>
                  <a href='#'>
                    <i className='fas fa-file-invoice-dollar' />
                    <span> Accounts</span> <span className='menu-arrow' />
                  </a>
                  <ul>
                    <li>
                      <a href='fees-collections.html'>Fees Collection</a>
                    </li>
                    <li>
                      <a href='expenses.html'>Expenses</a>
                    </li>
                    <li>
                      <a href='salary.html'>Salary</a>
                    </li>
                    <li>
                      <a href='add-fees-collection.html'>Add Fees</a>
                    </li>
                    <li>
                      <a href='add-expenses.html'>Add Expenses</a>
                    </li>
                    <li>
                      <a href='add-salary.html'>Add Salary</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='holiday.html'>
                    <i className='fas fa-holly-berry' /> <span>Holiday</span>
                  </a>
                </li>
                <li>
                  <a href='fees.html'>
                    <i className='fas fa-comment-dollar' /> <span>Fees</span>
                  </a>
                </li>
                <li>
                  <a href='exam.html'>
                    <i className='fas fa-clipboard-list' />
                    <span>Exam list</span>
                  </a>
                </li>
                <li>
                  <a href='event.html'>
                    <i className='fas fa-calendar-day' /> <span>Events</span>
                  </a>
                </li>
                <li>
                  <a href='time-table.html'>
                    <i className='fas fa-table' /> <span>Time Table</span>
                  </a>
                </li>
                <li>
                  <a href='library.html'>
                    <i className='fas fa-book' /> <span>Library</span>
                  </a>
                </li>
                <li className='menu-title'>
                  <span>Pages</span>
                </li>
                <li className='submenu'>
                  <a href='#'>
                    <i className='fas fa-shield-alt' />
                    <span> Authentication </span>
                    <span className='menu-arrow' />
                  </a>
                  <ul>
                    <li>
                      <a href='login.html'>Login</a>
                    </li>
                    <li>
                      <a href='register.html'>Register</a>
                    </li>
                    <li>
                      <a href='forgot-password.html'>Forgot Password</a>
                    </li>
                    <li>
                      <a href='error-404.html'>Error Page</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='blank-page.html'>
                    <i className='fas fa-file' /> <span>Blank Page</span>
                  </a>
                </li>
                <li className='menu-title'>
                  <span>Others</span>
                </li>
                <li>
                  <a href='sports.html'>
                    <i className='fas fa-baseball-ball' /> <span>Sports</span>
                  </a>
                </li>
                <li>
                  <a href='hostel.html'>
                    <i className='fas fa-hotel' /> <span>Hostel</span>
                  </a>
                </li>
                <li>
                  <a href='transport.html'>
                    <i className='fas fa-bus' /> <span>Transport</span>
                  </a>
                </li>
                <li className='menu-title'>
                  <span>UI Interface</span>
                </li>
                <li>
                  <a href='components.html'>
                    <i className='fas fa-vector-square' />
                    <span>Components</span>
                  </a>
                </li>
                <li className='submenu'>
                  <a href='#'>
                    <i className='fas fa-columns' /> <span> Forms </span>
                    <span className='menu-arrow' />
                  </a>
                  <ul>
                    <li>
                      <a href='form-basic-inputs.html'>Basic Inputs </a>
                    </li>
                    <li>
                      <a href='form-input-groups.html'>Input Groups </a>
                    </li>
                    <li>
                      <a href='form-horizontal.html'>Horizontal Form </a>
                    </li>
                    <li>
                      <a href='form-vertical.html'> Vertical Form </a>
                    </li>
                    <li>
                      <a href='form-mask.html'> Form Mask </a>
                    </li>
                    <li>
                      <a href='form-validation.html'> Form Validation </a>
                    </li>
                  </ul>
                </li>
                <li className='submenu'>
                  <a href='#'>
                    <i className='fas fa-table' /> <span> Tables </span>
                    <span className='menu-arrow' />
                  </a>
                  <ul>
                    <li>
                      <a href='tables-basic.html'>Basic Tables </a>
                    </li>
                    <li>
                      <a href='data-tables.html'>Data Table </a>
                    </li>
                  </ul>
                </li>
                <li className='submenu'>
                  <a href='javascript:void(0);'>
                    <i className='fas fa-code' /> <span>Multi Level</span>
                    <span className='menu-arrow' />
                  </a>
                  <ul>
                    <li className='submenu'>
                      <a href='javascript:void(0);'>
                        <span>Level 1</span> <span className='menu-arrow' />
                      </a>
                      <ul>
                        <li>
                          <a href='javascript:void(0);'>
                            <span>Level 2</span>
                          </a>
                        </li>
                        <li className='submenu'>
                          <a href='javascript:void(0);'>
                            <span> Level 2</span>
                            <span className='menu-arrow' />
                          </a>
                          <ul>
                            <li>
                              <a href='javascript:void(0);'>Level 3</a>
                            </li>
                            <li>
                              <a href='javascript:void(0);'>Level 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href='javascript:void(0);'>
                            
                            <span>Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>
                        
                        <span>Level 1</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </Scrollbars>
      </div>
    </React.Fragment>
  );
};
export default SideBar;
