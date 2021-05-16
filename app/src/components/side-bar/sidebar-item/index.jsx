import React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '@iconify/react';
import './styles.css';

const Home = ({ PropIcon, children }) => (
  <li className="side-bar-item selected">
    <Link to="/">
      <Icon icon={PropIcon} />
      <p>{children}</p>
    </Link>
  </li>
);

export default Home;
