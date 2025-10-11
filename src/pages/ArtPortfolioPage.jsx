import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const sectionStyle = { margin: '60px 0' };
const gridStyle = {
  display: 'grid',
  gap: '22px',
  columnGap: '22px', // spacing between columns
  rowGap: '22px',    // bigger spacing between rows
  justifyItems: 'center',
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(4, minmax(300px, 450px))',
};

const cardStyle = {
  position: 'relative',
  background: '#0e0e16',
  borderRadius: '14px',
  overflow: 'hidden',
  color: '#ffb380',
  cursor: 'pointer',
  width: '100%',
  
  maxWidth: '400px',
  height: '320px', // ✅ gives height like before
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
};


const overlayStyle = {
  position: 'absolute',
  inset: 0,
  background: 'rgba(0,0,0,0.7)',
  color: 'white',
  opacity: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px',
  transition: 'opacity 0.3s ease',
  textAlign: 'center',
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',     // ✅ fills box, crops edges if needed
  objectPosition: 'center', // ✅ centers image nicely
  display: 'block',
  borderRadius: '10px',
};

const ArtPortfolioPage = () => {
  const [fullscreenImg, setFullscreenImg] = useState(null);

  const artSections = [
    {
      title: "Fine Arts",
      works: [
        {
          title: "Chaos",
          img: "/turtle.jpg",
          desc: "Pen and colored pencil piece — won and selected for the Honor's college luncheon graduation pamphlet, then bought and hung by the Honor's college at Fort Douglas.",
        },
        {
          title: "Shoes",
          img: "/shoes.jpeg",
          desc: "Watercolor piece of shoes.",
        },
        {
          title: "Family",
          img: "/grandma.JPG",
          desc: "Pen and ink piece of my grandmother and brother.",
        },
                {
          title: "Monster",
          img: "/monster.jpg",
          desc: "Charcoal piece of a monster.",
        },
        {
          title: "Fish",
          img: "/fish.jpeg",
          desc: "Coffee painted piece of a fish.",
        },
        {
          title: "Window",
          img: "/window.jpg",
          desc: "Chjarcoal piece of a view out the window.",
        },
        {
          title: "Motorcycle",
          img: "/bike.jpeg",
          desc: "Watercolor piece of a motorcycle.",
        },
                {
          title: "Shoe",
          img: "/shoe.jpg",
          desc: "Pencil sketch.",
        },
        {
          title: "Maria Island, Tasmania",
          img: "/landscape.jpg",
          desc: "Oil Painting.",
        },
        {
          title: "Wistful Memories",
          img: "/fans.jpg",
          desc: "Prismacolor on black board.",
        },
                {
          title: "F1 Car",
          img: "/car1.jpg",
          desc: "Watercolor.",
        },
        {
          title: "Lamborghini",
          img: "/car2.jpg",
          desc: "Watercolor.",
        },
        {
          title: "Work",
          img: "/collage.jpeg",
          desc: "Prismacolor bought and hung by Honor's college at Fort Douglas.",
        },
      ],
    },
    {
      title: "Film & Media Arts",
      works: [
        {
          title: "Wake Up",
          video: "https://www.youtube.com/watch?v=opSWKgP_Mjs",
          desc: "FILM 2500 in Cefalu,Sicily - final project of a Film & Media Arts study abroad program showed in local theatre. (CLICK TO VIEW)",
        },
        {
          title: "AI Film Rough Draft",
          video: "https://www.youtube.com/watch?v=4Dz5krnucmI",
          desc: "FILM 3945 AI 1 minuite rough draft - AI Filmaking course using Midjourney, Kling, Gemini, Claude, and Adobe Premiere Pro.(CLICK TO VIEW)",
        },
      ],
    },
    
    {
      title: "Graphic Design",
      works: [
        {
          title: "Up",
          img: "/hope.jpg",
          desc: "Digital Art Adobe Software.",
        },
        {
          title: "Self Portrait",
          img: "/me.png",
          desc: "Digital Art Adobe Illustrator.",
        },
        {
          title: "The Goat",
          img: "/goat.jpg",
          desc: "Digital Art collage Adobe Photoshop.",
        },
        {
          title: "Event Flyer",
          img: "/event.jpg",
          desc: "Digital Art of Event Flyer for RHA Commmunity Council.",
        },
      ],
    },

     {
      title: "Photography",
      works: [
        {
          title: "Tassie 1",
          img: "/land1.jpg",
          desc: "Salamanca Market, Hobart, Tasmania.",
        },
        {
          title: "Catherine Bao",
          img: "/catherine.jpg",
          desc: "Salt Lake City, UT.",
        },
        {
          title: "Lights",
          img: "/light.JPG",
          desc: "Hobart, Tasmania.",
        },
        {
          title: "Shade",
          img: "/triangle.JPG",
          desc: "University of Utah, Salt Lake City, UT.",
        },
        {
          title: "Tassie 2",
          img: "/ducks.jpg",
          desc: "Salamanca Market, Hobart, Tasmania.",
        },
        {
          title: "Tassie 3",
          img: "/land2.jpg",
          desc: "Salamanca Market, Hobart, Tasmania.",
        },
        {
          title: "Seoul 1",
          img: "/korea.jpeg",
          desc: "Seoul, South Korea.",
        },
        {
          title: "Cefalu",
          img: "/italy.JPG",
          desc: "Cefalu, Sicily, Italy.",
        },
        {
          title: "Seoul 2",
          img: "/korea2.jpeg",
          desc: "Seoul, South Korea.",
        },
        {
          title: "Bussiness Building",
          img: "/bldg.jpg",
          desc: "University of Utah, Salt Lake City, UT.",
        },
        {
          title: "Shopping",
          img: "/photocollage.jpg",
          desc: "Photo Collage Hobart, Tasmania.",
        },
      ],
    },

         {
      title: "Fabric Designs",
      works: [
        {
          title: "Hoodie (Front)",
          img: "/hoodiefront.jpg",
          desc: "Screen Printing.",
        },
        {
          title: "Hoodie (Back)",
          img: "/hoodieback.jpg",
          desc: "Screen Printing",
        },
         {
          title: "Tote Bag",
          img: "/tote.jpg",
          desc: "Heat press.",
        },
        {
          title: "Pants (In Progress)",
          img: "/pant.jpeg",
          desc: "Fabric paints.",
        },
      ],
    },
  ];

  
  

  return (
    <div
      className="art-portfolio-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        minHeight: '100vh',
        paddingTop: '175px',
        paddingBottom: '80px',
        color: '#ffb380',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          color: '#ff6a00',
          fontSize: '2.6rem',
          fontWeight: 700,
          marginBottom: '12px',
        }}
      >
        Art Portfolio
      </h2>

      <h3
        style={{
          color: 'white',
          fontSize: '1.25rem',
          fontWeight: 600,
          marginBottom: '40px',
          maxWidth: '2000px',
          lineHeight: 1.6,
        }}
      >
        Featuring work in studio art, filmmaking, graphic design, photography, and fabric designs.
      </h3>

      {artSections.map((section, i) => (
        <section key={i} style={{ ...sectionStyle, width: '100%', maxWidth: '1250px' }}>
          <h3
            style={{
              color: '#f83b1a',
              justifyContent: 'center',
              fontSize: '1.7rem',
              fontWeight: 700,
              marginBottom: '28px',
              letterSpacing: '2px',
            }}
          >
            {section.title}
          </h3>

          <div style={gridStyle}>
           {section.works.map((work, j) => {
  // determine row type (4 cards per row)
  const rowIndex = Math.floor(j / 4);

  // alternate styles by row
  const dynamicCardStyle = {
    ...cardStyle,
    height:
       section.title === "Fine Arts"
      ? rowIndex === 0
        ? "400px"
        : rowIndex === 1
        ? "260px"
        : rowIndex === 2
        ? "260px"
        : "430px"
      : section.title === "Film & Media Arts"
      ? rowIndex === 0
        ? "260px"
        : "260px"
      : section.title === "Graphic Design"
      ? rowIndex === 0
        ? "400px"
        : "400px"
      : section.title === "Photography"
      ? rowIndex === 0
        ? "260px"
        : rowIndex === 2
        ? "300px"
        : "400px"
      : section.title === "Fabric Designs"
      ? rowIndex === 0
        ? "400px"
        : "400px"


          : cardStyle.height,
  };
  

  return (
    <div
      key={j}
      style={dynamicCardStyle}
      onClick={() => window.open(work.img || work.video, "_blank")}
      onMouseEnter={(e) =>
        (e.currentTarget.querySelector(".overlay").style.opacity = 1)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.querySelector(".overlay").style.opacity = 0)
      }
    >
{work.video ? (
  <img
    src={`https://img.youtube.com/vi/${work.video.split("v=")[1]}/hqdefault.jpg`}
    alt={work.title}
    style={imgStyle}
  />
) : (
  <img src={work.img} alt={work.title} style={imgStyle} />
)}

      <div className="overlay" style={overlayStyle}>
        <h4
          style={{
            fontSize: "1.1rem",
            marginBottom: "6px",
            color: "#ffb380",
          }}
        >
          {work.title}
        </h4>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>{work.desc}</p>
      </div>
    </div>
  );
})}

          </div>
        </section>
      ))}
    </div>
  );
};

export default ArtPortfolioPage;
