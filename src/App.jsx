// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

import HomePage from './pages/HomePage';
import CSPortfolioPage from './pages/CSPortfolioPage';
import ArtPortfolioPage from './pages/ArtPortfolioPage';
import ContactPage from './pages/ContactPage';

// Page wrapper with slide-up + fade-in animation
// Page wrapper with smooth slide-up + fade-in
const PageWrapper = ({ children }) => {
  const location = useLocation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [location.pathname]);

  return (
    <div
      key={key}
      style={{
        animation: 'slideUpFade 0.7s ease forwards', // quick slide + fade
      }}
    >
      {children}
    </div>
  );
};




function App() {
  const [dotOpacity, setDotOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      let opacity = 1;
      if (y > 200) opacity = Math.max(0, 1 - (y - 200) / 400);
      setDotOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <PageWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cs-portfolio" element={<CSPortfolioPage />} />
              <Route path="/art-portfolio" element={<ArtPortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </PageWrapper>
        </main>
        <Footer />
      </div>

      {/* 🔸 Slide-up + fade-in animation */}
     <style>
  {`
    @keyframes slideUpFade {
      0% {
        opacity: 0;
        transform: translateY(15px); /* start lower */
      }
      100% {
        opacity: 1;
        transform: translateY(0); /* final position */
      }
    }
  `}
</style>
    </Router>
  );
}

export default App;
