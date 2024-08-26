import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer, ScrollToTop } from '../index';

export const AppLayout: React.FC = () => {
  return (
    <div className="layout">
      <header>
        <Header />
      </header>
      <div className="scrollable">
        <main>
          <Outlet />
          <ScrollToTop />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};
