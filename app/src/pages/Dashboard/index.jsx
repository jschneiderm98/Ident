import React from 'react';

import SideBar from '../../components/side-bar';
import Header from '../../components/dashboard-header';

import './styles.css';

const Home = () => (
  <div className="dashboard">
    <div className="dashboard-container">
      <SideBar />
      <div className="dashboard-body">
        <Header />
      </div>
    </div>
  </div>
);

export default Home;
