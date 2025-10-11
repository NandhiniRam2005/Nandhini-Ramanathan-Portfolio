import React from 'react';

const sectionStyle = { margin: '40px 0' };
const cardStyle = {
  background: '#181818',
  borderRadius: '16px',
  padding: '50px',
  marginBottom: '15px',
  color: '#ffb380',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
};
const buttonStyle = {
  display: 'inline-block',
  background: '#ff6a00',
  color: '#181818',
  padding: '10px 18px',
  borderRadius: '6px',
  fontWeight: 600,
  fontSize: '0.95rem',
  marginTop: '12px',
  textDecoration: 'none',
  transition: 'background 0.3s ease',
};
const buttonHover = {
  background: '#ffa64d',
};

// =======================
// RESEARCH PROJECTS
// =======================
const researchProjects = [
{
  title: "Analyzing Car Performance and dB Dynamics",
  description:
    "Explored how car noise levels, brand design, and pitstop strategies influence performance at the 24 Hour Le Mans race. Visualized relationships between speed, sound, and engineering variables using Python and public datasets from Tableau advised by Professor Kate Isaacs.",
  technologies: ["Python", "Jupyter", "Tableau", "Matplotlib", "Pandas"],
  media: {
    type: "image",
    url: "/graph.png",
    alt: "Car Performance and dB Dynamics Visualization Poster",
  },
  link: "/poster.pdf",
},
{
  title: "Independent Study: Data Visualization & High-Performance Computing",
  description:
    "Created interactive data visualization prototypes using Vue.js and D3.js as part of a CHPC independent study. Gained hands-on experience in web application development, data visualization, and working with datasets, with an emphasis on readability and usability for future analysis of Utah’s mortality database advised by Professor Kate Isaacs.",
  technologies: ["Vue.js", "D3.js", "JavaScript", "HTML", "CSS", "Multinet API"],
  media: {
    type: "image",
    url: "/independent.png",
    alt: "CHPC Visualization Independent Study",
  },
  link: "/CITI.pdf",
},
];

// =======================
// GAME DEVELOPMENT PROJECTS
// =======================
const gameProjects = [
  {
    title: "Life Investor",
    description:
      "An educational simulation game teaching personal finance through dynamic player decision-making, built with a group of 5.",
    technologies: ["C++", "Qt", "Box2D"],
    media: {
      type: "video",
      url: "https://www.youtube.com/watch?v=sOsgzARuXYc",
      alt: "Life Investor Gameplay",
    },
    link: "https://github.com/NandhiniRam2005/CS3505-Group-Assignment9-LifeInvestor",
  },
  {
    title: "Snake Client (Networked Multiplayer Game)",
    description:
      "A multi-client Snake game featuring real-time networking, data tracking, and logging systems built in C# with a partner.",
    technologies: ["C#", "Networking", "Databases", "Blazor"],
    media: {
      type: "image",
      url: "/snake.png",
      alt: "Snake Client Gameplay",
    },
    link: "https://github.com/NandhiniRam2005/CS3500-KollywoodTacos.Pair-Assignment8-Chatting.ChatServer",
  },
  {
    title: "Jumping Joey",
    description:
      "A 2D side-scrolling application featuring Joey the kangaroo, built using Pygame with custom art and level design.",
    technologies: ["Python", "Processing"],
    media: {
      type: "video",
      url: "/roo.mp4",
      alt: "Jumping Joey Gameplay",
    },
    link: "https://github.com/NandhiniRam2005/ComputerProg1And2-NandhiniRam-HighSchoolProjects/tree/main/JUMP%20JOEY%20FINAL%20GAME",
  },

  {
  title: "Spongebob: Mission to Outer Space",
  description:
    "An arcade-style space shooter where Spongebob must rescue Gary by destroying burger asteroids. Built in Processing with edited graphics, sound effects, and object-oriented structure.",
  technologies: ["Processing", "Python", "Sound Library"],
  media: {
    type: "video",
    url: "/sponge_final.mp4", // optional – place screenshot in /public
    alt: "Spongebob Space Game",
  },
  link: "https://github.com/NandhiniRam2005/ComputerProg1And2-NandhiniRam-HighSchoolProjects/tree/main/SpaceGame", // your GitHub link
},
];

// =======================
// TECHNICAL PROJECTS
// =======================
const technicalProjects = [
  {
    title: "Munchkin Sprite Editor",
    description:
      "A 2D sprite editor supporting layers, animation frames, and pixel-level editing using Qt signals and slots with a group of 5.",
    technologies: ["C++", "Qt", "Teamwork"],
    media: {
      type: "video",
      url: "https://www.youtube.com/watch?v=K6Oe60DzryY",
      alt: "Sprite Editor Interface",
    },
    link: "https://github.com/NandhiniRam2005/CS3505-Group-Assignment8-SpriteEditor",
  },
  {
  title: "Spreadsheet Application",
  description:
    "Developed a spreadsheet system with formula evaluation, circular dependency detection, and GUI integration with a partner.",
  technologies: ["C#", "Visual Studio", "JSON"],
  media: {
    type: "video",
    url: "/spreaad.mp4",  // ⬅️ keep local file for card preview
    alt: "Spreadsheet Interface",
  },
  link: "https://github.com/NandhiniRam2005/CS3500-BollywoodBurritos.Pair-Assignment7-SpreadsheetPair",
  demoVideo: "https://www.youtube.com/watch?v=6_eWykReQBI", // ⬅️ add this new field
},

];

// =======================
// COMPONENT
// =======================
const CSPortfolioPage = () => (
  <div
    className="cs-portfolio-page section"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '90vh',           // match Hero minHeight
      width: '100vw',
      paddingTop: '175px',         // match Hero paddingTop
      marginBottom: '8',       // match Hero marginBottom
      textAlign: 'center',
      color: '#ff6a00',
      fontSize: '1.00rem',
      fontWeight: 700,
    }}
  >


   <div style={{ textAlign: 'center', marginBottom: 30 }}>
  <h2
    style={{
      margin: 0,
      color: '#ff6a00',
      fontSize: '2.7rem',
      fontWeight: 700,
      letterSpacing: '-0.5px',
    }}
  >
    Computer Science Portfolio
  </h2>
  <h3
    style={{
      marginTop: 4,
      color: 'white',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
      color: 'white',
      paddingBottom: '30px',
    }}
  >
    Featuring work in game design, software engineering, and data visualization research.
  </h3>
</div>


    {[
  {
    title: 'Game Development',
    minHeight: '650px',
    projects: gameProjects,
  },
  {
    title: 'Technical Projects',
   minHeight: '650px',
    projects: technicalProjects,
  },
  {
    title: 'Research',
    minHeight: '850px',
    projects: researchProjects,
  },
].map((section, sIdx) => (
      <section key={sIdx} style={{ ...sectionStyle, width: '100%' }}>
       <h3
  style={{
    color: '#f83b1aff',       // darker orange
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 1,
    fontSize: '1.6rem',     // larger text
    letterSpacing: '3.0px', // spaced-out letters
  }}
>
  {section.title}
</h3>
    
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'stretch',
            gap: '25px',
            columnGap: '25px',
            rowGap: '10px',
            justifyContent: 'center',
            maxWidth: '1250px',
            margin: '0 auto',
          }}
        >
          {section.projects.map((proj, idx) => (
            <div
              key={idx}
              style={{
                ...cardStyle,
                width: 400,
                textAlign: 'left',
                cursor: 'default',
                display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // ⬅️ ensures bottom content stays aligned
        minHeight: section.minHeight, // ⬅️ ensures cards are the same height
        maxHeight: 'fit-content',
        background: '#0e0e16',
        borderRadius: '10px',
        padding: '20px',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'translateY(-5px)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'translateY(0)')
              }
            >
              <div
                style={{
                  width: '100%',
                  height: '225px',
                  background: '#222',
                  borderRadius: '10px',
                  marginBottom: '14px',
                  overflow: 'hidden',
                }}
              >
{proj.media.type === 'video' ? (
  <video
    controls
    poster={proj.media.thumbnail}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '8px',
    }}
    preload="metadata"
  >
    <source
      src={
        proj.title === "Life Investor"
          ? "trimmedLife.mp4"
          : proj.title === "Munchkin Sprite Editor"
          ? "/sprite.mp4"
          : proj.media.url
      }
      type="video/mp4"
    />
  </video>
) : (
  <img
    src={proj.media.url}
    alt={proj.media.alt}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '8px',
    }}
  />
)}

              </div>

              <h4 style={{ color: '#fff', marginBottom: 6 }}>{proj.title}</h4>
              <p style={{ marginBottom: 8 }}>{proj.description}</p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginBottom: 8,
                }}
              >
                {proj.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      background: '#ffb380',
                      color: '#18171c',
                      borderRadius: '4px',
                      padding: '2px 8px',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Supporting Documents Box */}
<div
  style={{
    border: '1.5px solid #ff4d00ff',
    borderRadius: '10px',
    padding: '12px 14px',
    marginTop: '50px',
    marginBottom: '14px',
    minHeight: '150px', // keeps box uniform even with fewer buttons
    background: 'rgba(255, 179, 128, 0.05)',
  }}
>
  <p
    style={{
      color: '#fbd1b2ff',
      fontWeight: 600,
      marginBottom: '8px',
      fontSize: '0.95rem',
    }}
  >
    Supporting Documents:
  </p>
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
    }}
  >
    {["Life Investor", "Munchkin Sprite Editor"].includes(proj.title) && (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: 'transparent',
        border: '1px solid #ffb380',
        color: '#ffb380',
        borderRadius: '6px',
        padding: '6px 10px',
        fontSize: '0.85rem',
        fontWeight: 500,
        textDecoration: 'none',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#ffb380';
        e.currentTarget.style.color = '#181818';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = '#ffb380';
      }}
    >
      🎮 Play Online
    </a>
    )}

    {/* 📄 CITI Certification */}
{proj.title === "Independent Study: Data Visualization & High-Performance Computing" && (
  <a
    href={proj.link}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      background: 'transparent',
      border: '1px solid #ffb380',
      color: '#ffb380',
      borderRadius: '6px',
      padding: '6px 10px',
      fontSize: '0.85rem',
      fontWeight: 500,
      textDecoration: 'none',
      transition: 'all 0.2s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = '#ffb380';
      e.currentTarget.style.color = '#181818';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = '#ffb380';
    }}
  >
    📄 CITI Certification
  </a>
)}


{["Life Investor", "Munchkin Sprite Editor", "Spreadsheet Application"].includes(proj.title) && (
  <a
    href={proj.title === "Spreadsheet Application" ? proj.demoVideo : proj.media.url}

      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: 'transparent',
        border: '1px solid #ffb380',
        color: '#ffb380',
        borderRadius: '6px',
        padding: '6px 10px',
        fontSize: '0.85rem',
        fontWeight: 500,
        textDecoration: 'none',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#ffb380';
        e.currentTarget.style.color = '#181818';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = '#ffb380';
      }}
    >
      🎥 Demo Video
    </a>
)}

{/* 🐍 Snake Game Database Video */}
{proj.title === "Snake Client (Networked Multiplayer Game)" && (
  <a
    href="https://www.youtube.com/watch?v=AfbwyMCTk9w"  // <-- your video file path
    target="_blank"
    rel="noopener noreferrer"
    style={{
      background: 'transparent',
      border: '1px solid #ffb380',
      color: '#ffb380',
      borderRadius: '6px',
      padding: '6px 10px',
      fontSize: '0.85rem',
      fontWeight: 500,
      textDecoration: 'none',
      transition: 'all 0.2s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = '#ffb380';
      e.currentTarget.style.color = '#181818';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = '#ffb380';
    }}
  >
    🐍 Snake Game Database Video
  </a>
)}


    {/* 📊 Poster Presentation */}
    {proj.title === "Analyzing Car Performance and dB Dynamics" && (
      <a
        href={proj.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: 'transparent',
          border: '1px solid #ffb380',
          color: '#ffb380',
          borderRadius: '6px',
          padding: '6px 10px',
          fontSize: '0.85rem',
          fontWeight: 500,
          textDecoration: 'none',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#ffb380';
          e.currentTarget.style.color = '#181818';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = '#ffb380';
        }}
      >
        📊 Poster Presentation
      </a>
    )}

{![ 
    "Analyzing Car Performance and dB Dynamics", 
    "Independent Study: Data Visualization & High-Performance Computing"
  ].includes(proj.title) && (
    <a
      href={proj.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: 'transparent',
        border: '1px solid #ffb380',
        color: '#ffb380',
        borderRadius: '6px',
        padding: '6px 10px',
        fontSize: '0.85rem',
        fontWeight: 500,
        textDecoration: 'none',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#ffb380';
        e.currentTarget.style.color = '#181818';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = '#ffb380';
      }}
      
    >
      💻 Code Repository
    </a>
 )}
  </div>
</div>


            
            </div>
          ))}
        </div>
      </section>
    ))}
  </div>
);

export default CSPortfolioPage;
