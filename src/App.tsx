import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import AboutSection from './components/AboutSection';
import CoverageMap from './components/CoverageMap';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
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
        <Route path="/schedule-visit" element={<ScheduleVisitPage />} />
        <Route path="/electrical-work" element={<ElectricalWorkPage />} />
        <Route path="/plumbing-services" element={<PlumbingServicesPage />} />
        <Route path="/painting-drywall" element={<PaintingDrywallPage />} />
        <Route path="/carpentry" element={<CarpentryPage />} />
        <Route path="/home-maintenance" element={<HomeMaintenancePage />} />
        <Route path="/appliance-installation" element={<ApplianceInstallationPage />} />
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Navigation />
            <main className="overflow-hidden">
              <HeroSection />
              <ServicesGrid />
              <AboutSection />
              <CoverageMap />
              <ReviewsSection />
              <ContactSection />
            </main>
            <FooterSection />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;