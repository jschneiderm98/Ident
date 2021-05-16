import React from 'react';
import { Icon } from '@iconify/react';
import baselineSearch from '@iconify-icons/ic/baseline-search';
import baselineSettings from '@iconify-icons/ic/baseline-settings';
import baselineNotifications from '@iconify-icons/ic/baseline-notifications';

import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg';
import UserImage from '../../assets/images/testPhoto.png';

import './styles.css';

const Home = () => (
  <header className="dashboard-header">
    <label htmlFor="search-bar" className="dashboard-header-search">
      <Icon icon={baselineSearch} />
      <input id="search-bar" type="text" className="dashboard-header-search" />
    </label>
    <Icon icon={baselineSettings} />
    <Icon icon={baselineNotifications} />
    <button className="dashboard-header-profile" type="button">
      <p>
        Olá,
        {' '}
        <strong>Felipe</strong>
      </p>
      <img alt="user" src={UserImage} />
    </button>
    <MenuIcon />
  </header>
);

export default Home;
