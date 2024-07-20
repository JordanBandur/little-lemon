import React from 'react';
import '../assets/styles/About.scss';

const About = () => {
  return (
    <section className="about">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
        </p>
      </div>
      <div className="about-images">
        <img src="/images/mario-and-adrian-a.jpg" alt="Mario and Adrian A" className="image1" />
        <img src="/images/mario-and-adrian-b.jpg" alt="Mario and Adrian B" className="image2" />
      </div>
    </section>
  );
};

export default About;
