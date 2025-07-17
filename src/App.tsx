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
import EmailTestPanel from './components/EmailTestPanel';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/schedule-visit" element={<ScheduleVisitPage />} />
        <Route path="/test-email" element={
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
            <EmailTestPanel />
          </div>
        } />
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