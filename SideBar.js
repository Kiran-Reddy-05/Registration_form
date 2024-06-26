import React, { useState } from 'react';
import './HrPage.css'; // Ensure you have the CSS file for styles
import TaskTable1 from './TaskTable1';

const employees = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
  { id: 5, name: 'Eva' },
  { id: 6, name: 'Frank' },
  { id: 7, name: 'Grace' },
  { id: 8, name: 'Hannah' },
  { id: 9, name: 'Ian' },
  { id: 10, name: 'Jack' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div className="container">
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <nav className="sidebar-nav">
          <ul>
            <li onClick={() => setIsOpen(!isOpen)}>
              Employees List
              {isOpen && (
                <ul>
                  {employees.map((employee) => (
                    <li key={employee.id} onClick={() => handleEmployeeClick(employee)}>
                      {employee.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        {selectedEmployee && <TaskTable1 employee={selectedEmployee} />}
      </div>
    </div>
  );
};

export default Sidebar;
