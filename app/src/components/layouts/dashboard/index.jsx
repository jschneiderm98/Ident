import React from 'react';

import SideBar from '../../side-bar';
import Header from '../../dashboard-header';

import './styles.css';

const DashboardLayout = ({ children }) => (
  <div className="dashboard">
    <div className="dashboard-container">
      <SideBar />
      <div className="dashboard-body">
        <Header />
        {children}
      </div>
    </div>
  </div>
);

export default DashboardLayout;
