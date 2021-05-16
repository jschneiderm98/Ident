import React from 'react';

import homeOutlined from '@iconify-icons/ant-design/home-outlined';
import productDownloadble from '@iconify-icons/gridicons/product-downloadable';

import SideBarItem from './sidebar-item';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

import './styles.css';

const Home = () => (
  <nav className="side-bar">
    <div className="side-bar-logo-container">
      <Logo />
    </div>
    <ul>
      <SideBarItem PropIcon={homeOutlined}>Dashboard</SideBarItem>
      <SideBarItem PropIcon={productDownloadble}>Pacientes</SideBarItem>
      <SideBarItem PropIcon={productDownloadble}>Teste</SideBarItem>
      <SideBarItem PropIcon={productDownloadble}>Configurações</SideBarItem>
    </ul>
  </nav>
);

export default Home;
