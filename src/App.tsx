import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import AboutSection from './components/AboutSection';
import CoverageMap from './components/CoverageMap';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import ScheduleVisitPage from './components/ScheduleVisitPage';
import AdminPanel from './components/AdminPanel';
import ElectricalWorkPage from './components/ElectricalWorkPage';
import PlumbingServicesPage from './components/PlumbingServicesPage';
import PaintingDrywallPage from './components/PaintingDrywallPage';
import CarpentryPage from './components/CarpentryPage';
import HomeMaintenancePage from './components/HomeMaintenancePage';
import ApplianceInstallationPage from './components/ApplianceInstallationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/schedule-visit" element={
          <Layout>
            <ScheduleVisitPage />
          </Layout>
        } />
        <Route path="/electrical-work" element={
          <Layout>
            <ElectricalWorkPage />
          </Layout>
        } />
        <Route path="/plumbing-services" element={
          <Layout>
            <PlumbingServicesPage />
          </Layout>
        } />
        <Route path="/painting-drywall" element={
          <Layout>
            <PaintingDrywallPage />
          </Layout>
        } />
        <Route path="/carpentry" element={
          <Layout>
            <CarpentryPage />
          </Layout>
        } />
        <Route path="/home-maintenance" element={
          <Layout>
            <HomeMaintenancePage />
          </Layout>
        } />
        <Route path="/appliance-installation" element={
          <Layout>
            <ApplianceInstallationPage />
          </Layout>
        } />
        <Route path="/" element={
          <Layout>
            <HeroSection />
            <ServicesGrid />
            <AboutSection />
            <CoverageMap />
            <ReviewsSection />
            <ContactSection />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;