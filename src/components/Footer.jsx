// Footer.js (with Hero-style icons)
import { Link, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from './footerLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

const handleFooterNavClick = (to) => (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  navigate(to);       // Navigate via React Router
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
};

  return (
    <footer
      className="footer"
      style={{
        background: 'none',
        textAlign: 'center',
        padding: 0,
      }}
    >
      {/* Row 1: Accent line */}
      <div
        style={{
          borderTop: '1.5px solid rgba(255, 106, 0, 0.57)',
          width: '100%',
          marginBottom: 0,
        }}
      ></div>

      {/* Row 2: Three columns */}
      <div
  className="footer-content"
  style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    maxWidth: 900,
    margin: '0 auto',
    padding: '50px 0 0 0',
    gap: '50px', // adds breathing room
  }}
>
        {/* Left: Name/Logo */}
        <div
          style={{
            flex: '1 1 220px',
            textAlign: 'left',
            minWidth: 220,
            display: 'flex',
            alignItems: 'flex-start',
            paddingLeft: '50px',
            paddingLeft: '20px',
          }}
        >
          <div
            style={{
              fontWeight: 700,
              color: '#ff6a00',
              fontSize: '1.25rem',
              marginBottom: 20,
              letterSpacing: '-0.5px',
              fontFamily: 'inherit',
              margin: '40 20px',
            }}
          >
            Nandhini Ramanathan
          </div>
        </div>

        {/* Center: Navigate */}
        <div
          style={{
            flex: '1 1 220px',
            textAlign: 'left',
            minWidth: 220,
            paddingLeft: '50px',
          }}
        >
          <div
            style={{
              fontWeight: 700,
              color: '#ffb380',
              fontSize: '1.1rem',
              marginBottom: 20,
              letterSpacing: '0.01em',
            }}
          >
            Navigate
          </div>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '0.9rem',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
{NAV_LINKS.map((link) => {
  const isPDF = link.to.endsWith('.pdf'); // Detect the resume link
  if (isPDF) {
    return (
      <li key={link.to}>
        <a
          href={link.to}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#ffb380',
            fontSize: '0.9rem',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#ff6a00')}
          onMouseLeave={(e) => (e.target.style.color = '#ffb380')}
        >
          {link.label}
        </a>
      </li>
    );
  } else {
    return (
      <li key={link.to}>
        <a
          href={link.to}
          onClick={handleFooterNavClick(link.to)}
          style={{
            color: '#ffb380',
            fontSize: '0.9rem',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#ff6a00')}
          onMouseLeave={(e) => (e.target.style.color = '#ffb380')}
        >
          {link.label}
        </a>
      </li>
    );
  }
})}


          </ul>
        </div>

        {/* Right: Connect icons (same as Hero.js) */}
        <div
          style={{
            flex: '1 1 220px',
            textAlign: 'left',
            minWidth: 220,
            paddingLeft: '30px',
          }}
        >
          <div
            style={{
              fontWeight: 700,
              color: '#ffb380',
              fontSize: '1.1rem',
              marginBottom: 20,
              letterSpacing: '0.01em',
            }}
          >
            Contact
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: 6 }}>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nandhini-ramanathan4/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              style={{ color: '#ffb380' }}
            >
              <svg
                width="45"
                height="45"
                viewBox="0 0 20 20"
                fill="none"
                style={{
                  background: '#18171c',
                  borderRadius: '10px',
                  padding: '8px',
                }}
              >
                <rect width="24" height="24" rx="6" fill="#18171c" />
                <path
                  d="M8.9 10.5H6.6v7h2.3v-7zM7.7 9.2a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6zM13.4 10.5c-1.3 0-2 .8-2.2 1.3v-1.3h-2.3v7h2.3v-3.8c0-.7.3-1.3 1.1-1.3s1.1.6 1.1 1.3v3.8h2.3v-4.1c0-2.2-1.3-3.2-2.3-3.2z"
                  fill="#ffb380"
                />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:nandhini@email.com"
              title="Email"
              style={{ color: '#ffb380' }}
            >
              <svg
                width="45"
                height="45"
                viewBox="0 0 21 20"
                fill="none"
                style={{
                  background: '#18171c',
                  borderRadius: '10px',
                  padding: '8px',
                }}
              >
                <rect width="24" height="24" rx="6" fill="#18171c" />
                <path
                  d="M4 7h16v10H4V7z"
                  stroke="#ffb380"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 7l8 6 8-6"
                  stroke="#ffb380"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Phone */}
            <a href="tel:8018654081" title="Phone" style={{ color: '#ffb380' }}>
              <svg
                width="45"
                height="45"
                viewBox="0 0 20 20"
                fill="none"
                style={{
                  background: '#18171c',
                  borderRadius: '10px',
                  padding: '8px',
                }}
              >
                <rect width="24" height="24" rx="6" fill="#18171c" />
                <path
                  d="M6.5 5.5c-.3 0-.6.1-.8.3l-1.1 1a2 2 0 0 0-.4 2.2c1.4 3.2 3.9 5.7 7 7a2 2 0 0 0 2.2-.4l1-1.1c.2-.2.3-.5.3-.8a1 1 0 0 0-.4-.8l-2.1-1.6a1 1 0 0 0-1.3.1l-.8.6a9.6 9.6 0 0 1-3.5-3.5l.6-.8a1 1 0 0 0 .1-1.3L7.3 5.9a1 1 0 0 0-.8-.4z"
                  stroke="#ffb380"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Row 3: Copyright */}
      <div
        style={{
          width: '100%',
          marginTop: 32,
          borderTop: '1px solid #444',
          background: 'none',
          padding: '30px 100px 30px 150px',
        }}
      >
        <div
          style={{
            fontSize: '0.75rem',
            color: '#ffb380',
            letterSpacing: '0.01em',
            marginLeft: 'calc(2.5vw + 8px)',
            textAlign: 'left',
            maxWidth: 320,
          }}
        >
          &copy; {currentYear} Nandhini Ramanathan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
