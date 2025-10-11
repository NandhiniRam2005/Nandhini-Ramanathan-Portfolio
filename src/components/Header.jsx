import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [fade, setFade] = useState(true); // fade state
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // trigger fade-in whenever route changes
    setFade(false); // reset
    const timeout = setTimeout(() => setFade(true), 50);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'CS Portfolio', path: '/cs-portfolio' },
    { name: 'Art Portfolio', path: '/art-portfolio' },
  ];

  const orange = '#ff5106ff';
  const darkOrange = '#962d00ff';

  return (
    <>
      <header
        className={isScrolled ? 'scrolled' : ''}
        style={{
          position: 'fixed',
          zIndex: 10,
          width: '100%',
          opacity: fade ? 1 : 0,
          transition: 'opacity 0.6s ease-in-out',
        }}
      >
        <div className="container">
          <div className="header-content">
            <Link
              to="/"
              className="logo"
              style={{ display: 'flex', alignItems: 'center', gap: '15px' }}
            >
              <img
                src="/smiley.png"
                alt="NR Logo"
                style={{
                  height: '40px',
                  width: '40px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                }}
              />
              <span
                style={{
                  fontWeight: 700,
                  fontSize: '1.7rem',
                  color: '#18171c',
                  letterSpacing: '0.02em',
                }}
              >
                NR
              </span>
            </Link>

            <nav className="right-nav" style={{ marginLeft: 'auto' }}>
              <ul
                style={{
                  display: 'flex',
                  gap: '25px',
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}
              >
                {links.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <li key={link.path} style={{ position: 'relative' }}>
                      <Link
                        to={link.path}
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                        style={{
                          color: isActive ? darkOrange : orange,
                          textDecoration: 'none',
                          fontWeight: 500,
                          fontSize: '1.18rem',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) e.target.style.color = darkOrange;
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) e.target.style.color = orange;
                        }}
                      >
                        {link.name}
                        {isActive && (
                          <span
                            style={{
                              position: 'absolute',
                              bottom: '-4px',
                              left: 0,
                              height: '2px',
                              width: '100%',
                              backgroundColor: darkOrange,
                              opacity: 0,
                              animation: 'fadeInUnderline 0.4s forwards',
                            }}
                          ></span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div
                style={{
                  width: '100%',
                  height: '1.5px',
                  backgroundColor: 'rgba(255, 106, 0, 0.89)',
                  margin: 0,
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                }}
              ></div>
            </nav>
          </div>
        </div>
      </header>

      {/* 🔸 Keyframes for underline fade-in */}
      <style>
        {`
          @keyframes fadeInUnderline {
            0% { opacity: 0; transform: scaleX(0); }
            100% { opacity: 1; transform: scaleX(1); }
          }
        `}
      </style>
    </>
  );
};

export default Header;
