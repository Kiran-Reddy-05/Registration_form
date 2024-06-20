
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUser, faUserFriends, faChartBar, faMoneyBillAlt, faFileInvoice, faCog, faFileAlt, faFileWord, faFileUpload, faClipboard, faAddressBook, faCalculator, faClock, faCalendarAlt, faCalendarCheck, faHeart, faCalendar } from '@fortawesome/free-solid-svg-icons';


function HomePage() {
  const yearRef = useRef(null);

  const scrollToYear = () => {
    yearRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  

  return (
    <div className='The Parent'>
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#3498db', color: '#fff' }}>
      <Link className="navbar-brand" to="/">HR name</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/year" onClick={scrollToYear}>Year</Link>
            </li>
          <li className="nav-item">
            <Link className="nav-link" to="/benefits">BENEFITS</Link>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>

   <div className= 'sidebar'>
   <ul className="list-unstyled">
        <li>
          <FontAwesomeIcon icon={faBuilding} className="mr-2" />MY COMPANY
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} className="mr-2" />MY INFO
        </li>
        <li className="mt-3">
          <FontAwesomeIcon icon={faUserFriends} className="mr-2" />Employee Files
        </li>
        <li>
          <FontAwesomeIcon icon={faChartBar} className="mr-2" />Reports
        </li>
        <li>
          <FontAwesomeIcon icon={faMoneyBillAlt} className="mr-2" />Payroll
        </li>
        <li>
          <FontAwesomeIcon icon={faFileInvoice} className="mr-2" />Invoices
        </li>
        <li>
          <FontAwesomeIcon icon={faCog} className="mr-2" />Settings
        </li>
        <li>
          <FontAwesomeIcon icon={faFileAlt} className="mr-2" />Documents
        </li>
        <li>
          <FontAwesomeIcon icon={faFileWord} className="mr-2" />W2s
        </li>
        <li>
          <FontAwesomeIcon icon={faFileUpload} className="mr-2" />Post Documents
        </li>
        <li>
          <FontAwesomeIcon icon={faClipboard} className="mr-2" />Message Board
        </li>
        <li>
          <FontAwesomeIcon icon={faAddressBook} className="mr-2" />Contact Info
        </li>
        <li>
          <FontAwesomeIcon icon={faCalculator} className="mr-2" />Paycheck Calculators
        </li>
        <li>
          <FontAwesomeIcon icon={faClock} className="mr-2" />Time Clock
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />Manage Leave
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" />Manage Timesheets
        </li>
        <li>
          <FontAwesomeIcon icon={faHeart} className="mr-2" />Benefits
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} className="mr-2" />Calendar
        </li>
      </ul>
    </div>
   </div>
  );
}

export default HomePage;
