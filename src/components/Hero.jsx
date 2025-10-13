// Hero.js (with extra padding at top)
import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="hero"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '90vh',
        width: '100vw',
        paddingTop: '100px', // ← Added this line for extra spacing at top
        marginBottom: '100px',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '64px',
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        {/* Photo */}
        <div style={{ flex: '0 0 auto' }}>
          <img
            src="/linkedin_photo.jpg"
            alt="Nandhini Ramanathan"
            style={{
              width: 340,
              height: 340,
              borderRadius: '12px',
              objectFit: 'cover',
              boxShadow: '0 2px 16px rgba(0,0,0,0.12)',
            }}
          />
        </div>

        {/* Main text and buttons */}
        <div
          className="hero-content"
          style={{
            flex: '1 1 480px',
            minWidth: 380,
            maxWidth: 700,
          }}
        >
          <h1
            style={{
              fontSize: '2.7rem',
              fontWeight: 700,
              marginBottom: 8,
            }}
          >
            Nandhini Ramanathan
          </h1>
          <h2
            style={{
              fontSize: '1.39rem',
              color: 'white',
              fontWeight: 600,
              marginBottom: 30,
            }}
          >
            Merging imagination and innovation through technology
          </h2>
          <p
            style={{
              maxWidth: '600px',
              fontSize: '1rem',
              marginBottom: 40,
            }}
          >
            I am currently pursuing Computer Science and Film & Media Arts at
            the University of Utah's Honors's College. Using this, I aim to
            explore the intersection of technology and visual storytelling,
            focusing on computer graphics, animation, and interactive media. My
            background in both programming and art has given me a strong
            foundation for creating projects that are not only technically sound
            but also visually engaging. I hope to bring this blend of skills
            into future work in creative technology and animation.
          </p>

          {/* Main buttons */}
          <div style={{ display: 'flex', gap: '24px', marginBottom: 18 }}>
            <a
              href="/cs-portfolio"
              className="hero-btn"
              style={{
                background: '#ff4f19',
                color: '#fff',
                borderRadius: '8px',
                padding: '14px 40px',
                fontWeight: 600,
                fontSize: '1.15rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                textDecoration: 'none',
                transition: 'background 0.2s',
                minWidth: 180,
                textAlign: 'center',
              }}
            >
              CS Portfolio
            </a>
            <a
              href="/art-portfolio"
              className="hero-btn"
              style={{
                background: '#ff4f19',
                color: '#fff',
                borderRadius: '8px',
                padding: '14px 40px',
                fontWeight: 600,
                fontSize: '1.15rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                textDecoration: 'none',
                transition: 'background 0.2s',
                minWidth: 180,
                textAlign: 'center',
              }}
            >
              Art Portfolio
            </a>
            <a
  href="/Nandhini_Ramanathan_Resume.pdf"  // your PDF in public folder
  className="hero-btn"
  target="_blank"       // opens in a new tab
  rel="noopener noreferrer" // security best practice
  style={{
    background: '#222',
    color: '#ff4f19',
    borderRadius: '8px',
    padding: '14px 40px',
    fontWeight: 600,
    fontSize: '1.15rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    textDecoration: 'none',
    border: '1.5px solid #ff4f19',
    transition: 'background 0.2s',
    minWidth: 180,
    textAlign: 'center',
  }}
>
  View Resume
</a>

          </div>

{/* Contact icons */}
<div style={{ display: 'flex', gap: '32px', marginTop: 16 }}>
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/nandhini-ramanathan4/"
    target="_blank"
    rel="noopener noreferrer"
    title="LinkedIn"
    style={{ color: '#ffb380' }}
  >
    <svg
      width="58" // ⬅️ increased from 42
      height="58"
      viewBox="0 0 20 20"
      fill="none"
      style={{
        background: '#18171c',
        borderRadius: '10px',
        padding: '8px', // slightly increased
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
    href="mailto:nandhini2005@outlook.com"
    title="Email"
    style={{ color: '#ffb380' }}
  >
    <svg
      width="58"
      height="58"
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
      width="58"
      height="58"
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
    </section>
  );
};

export default Hero;
