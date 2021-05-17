import React from 'react';
import { Icon } from '@iconify/react';

import './styles.css';

const Dashboard = ({
  PropIcon, percentage, content, legend,
}) => (
  <div className="dashboard-card-aux">
    <div className="dashboard-info-card">
      <div className="dashboard-info-card-top">
        <Icon icon={PropIcon} />
        <button className={percentage < 0 ? 'negative' : undefined} type="button">{percentage > 0 ? `+${percentage}%` : `${percentage}%`}</button>
      </div>
      <h4 className="dashboard-info-card-content">{content}</h4>
      <p className="dashboard-info-card-legend">{legend}</p>
    </div>
  </div>
);

export default Dashboard;
