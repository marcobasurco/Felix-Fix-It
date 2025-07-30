import React from 'react';
import Navigation from './Navigation';
import FooterSection from './FooterSection';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <main className="overflow-hidden">
        {children}
      </main>
      <FooterSection />
    </div>
  );
};

export default Layout;