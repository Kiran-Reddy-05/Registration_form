import React from 'react'
import TaskTable1 from '../TaskTable1';
import OfficeImage from '../images/FsfLogo.jpg';
import ProfilePic from '../images/ProfilePic.jpg';
import './HrPage.css';
import Sidebar from './SideBar';




function EmployeePage() {
  return (
    <div className='The Parent'>
    <div className="navbar">
    <div className="logo">
     <img src={OfficeImage} alt='Logo'/>
     </div>
    <div className="logout">
      <button>Logout</button>
    </div>
  </div>

  <div className='SideBar'>
  <Sidebar />
  </div>
  
  <div className='profile'>
  <img src={ProfilePic} alt='ProfilePic'/>
  </div>
  <div className='EmployeName'>
    <h4>Hi, EmployeeName</h4>
  </div>
  

  <div className='TaskTable'>
  <TaskTable1 />
  </div>

  <footer className="footer">
      <div className="container">
            <h3>FSF Company Pvt. Ltd.</h3>
            <p>Madhapur, Hyd. +123 456 789</p>
            <p>Email: info@fsfcompany.com</p>
          </div>
    </footer>
  

  </div>
  )
}

export default EmployeePage


