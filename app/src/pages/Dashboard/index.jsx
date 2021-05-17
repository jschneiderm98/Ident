import React from 'react';
import PersonIcon from '@iconify-icons/ic/baseline-person-outline';
import TestTube from '@iconify-icons/bx/bx-test-tube';

import DashboardLayout from '../../components/layouts/dashboard';
import InfoCard from '../../components/dashboard-info-card';

import './styles.css';

const Dashboard = () => (
  <DashboardLayout>
    <div className="dashboard-content">
      <section className="dashboard-general-info">
        <h1 className="dashboard-section-title">Informações Gerais</h1>
        <div className="dashboard-info">
          <InfoCard PropIcon={PersonIcon} content="26" percentage={30} legend="Pacientes ativos" />
          <InfoCard PropIcon={TestTube} content="306" percentage={-10} legend="Testes realizados" />
          <InfoCard PropIcon={TestTube} content="139" percentage={30} legend="Testes concluídos" />
          <InfoCard PropIcon={TestTube} content="11" percentage={-3} legend="Pacientes ativos" />
        </div>
      </section>
      <section className="dashboard-history"><h1 className="dashboard-section-title">Histórico de atendimentos</h1></section>
      <section className="updates"><h1 className="dashboard-section-title">Atualizações importantes</h1></section>
    </div>
  </DashboardLayout>
);

export default Dashboard;
