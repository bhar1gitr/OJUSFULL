import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import './Heads.css'; // assuming heads.css is in your src folder

const Heads = () => {
  const [tab, setTab] = useState(0); // Tracks the active tab

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // ScrollReveal animations
    ScrollReveal({
      distance: '60px',
      duration: 2500,
      delay: 400
    });
    ScrollReveal().reveal('h2', { delay: 100, origin: 'top' });
    ScrollReveal().reveal('#team', { delay: 500, origin: 'bottom' });
  }, []);

  // Tab content for each year
  const tabsContent = [
    {
      year: '2022',
      members: [
        { name: 'Krish Jaswal', role: 'Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
        { name: 'Miheet Shah', role: 'Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/miheet_shah_z22bpc.png' },
        { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
      ],
    },
    {
      year: '2023',
      members: [
        { name: 'Aarav Gupta', role: 'Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
        { name: 'Ishita Sharma', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
        { name: 'Rohan Mehta', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
      ],
    },
    {
      year: '2024',
      members: [
        { name: 'Samaira Khan', role: 'Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
        { name: 'Kabir Singh', role: 'Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
        { name: 'Ananya Verma', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
      ],
    },
  ];

  return (
    <div>
      {/* Navigation */}
      

      {/* Tabs Navigation */}
      <div className="tabs">
        {tabsContent.map((tabItem, index) => (
          <button
            key={index}
            className={`tab-button ${tab === index ? 'active' : ''}`}
            onClick={() => setTab(index)}
          >
            {tabItem.year}
          </button>
        ))}
      </div>

      {/* Team Section */}
      <section id="team">
        {tabsContent[tab].members.map((member, index) => (
          <div className="team-box" key={index}>
            <div className="t-b-img">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="t-b-text">
              <strong>{member.name}</strong>
              <span>{member.role}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <section className="madeWithLove">
        <h5>
          Made with ❤️ by <a href="/team">Ojus Webdev</a>
        </h5>
      </section>

      {/* Scroll to top button */}
      <div onClick={scrollToTop} className="scrollTop">
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </div>
  );
};

export default Heads;
