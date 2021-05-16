import React from 'react';

import SideBar from '../../components/side-bar';

import './styles.css';

const Home = () => (
  <div className="dashboard">
    <div className="dashboard-container">
      <SideBar />
      <div className="dashboard-body">
        <header className="dashboard-header" />
      </div>
    </div>
  </div>
);

export default Home;
