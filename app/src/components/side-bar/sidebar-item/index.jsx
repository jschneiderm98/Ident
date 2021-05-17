import React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '@iconify/react';
import './styles.css';

const Home = ({ PropIcon, children, selected }) => (
  <li className={selected ? 'side-bar-item selected' : 'side-bar-item'}>
    <Link to="/">
      <Icon icon={PropIcon} />
      <p>{children}</p>
    </Link>
  </li>
);

export default Home;
