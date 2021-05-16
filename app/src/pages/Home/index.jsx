import React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '@iconify/react';
import homeOutlined from '@iconify-icons/ant-design/home-outlined';
import productDownloadble from '@iconify-icons/gridicons/product-downloadable';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';

import './styles.css';

const Home = () => (
  <div className="home">
    <div className="home-container">
      <nav className="side-bar">
        <Logo />
        <ul>
          <li className="side-bar-item selected">
            <Link to="/">
              <Icon icon={homeOutlined} />
              <p>Dashboard</p>
            </Link>
          </li>
          <li className="side-bar-item">
            <Link to="/">
              <Icon icon={productDownloadble} />
              <p>Pacientes</p>
            </Link>
          </li>
          <li className="side-bar-item">
            <Link to="/">
              <Icon icon={productDownloadble} />
              <p>Testes</p>
            </Link>
          </li>
          <li className="side-bar-item">
            <Link to="/">
              <Icon icon={productDownloadble} />
              <p>Configurações</p>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="home-body">a</div>
    </div>
  </div>
);

export default Home;
