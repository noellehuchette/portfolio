import React from 'react';
import './style.css';

const Home = () => {
  return (
    <div className="home-block">
      <div className="personal-info">
        <div className="headshot-block">
          <img className="headshot" src="/headshot.jpg" alt="Noelle Huchette" />
        </div>
        <div className="bio-block">
          <div className="block-content">
            <div className="block-title">
              <h2>bio</h2>
            </div>
            <h3>Noelle Huchette</h3>
            <span>(they/them)</span>
            <p>
              {' '}
              Mechanical engineer turned full stack software developer. Strong
              problem solving skills with a passion for collaboration and a
              growth mindset. Quick and enthusiastic learner. Interested in
              making a positive impact through well-crafted technological
              solutions for issues large and small. Reliable, intelligent, and
              tenacious worker excited to break into the industry.
            </p>
          </div>
        </div>
        <div className="skills-block">
          <div className="block-content">
            <div className="block-title">
              <h2>skills</h2>
            </div>
            <h4>Proficient</h4>
            <ul>
              <li>JavaScript/HTML/CSS</li>
              <li>React</li>
              <li>Redux</li>
              <li>Bootstrap</li>
              <li>MaterialUI</li>
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>Sequelize</li>
              <li>Express</li>
              <li>Firebase/Firestore</li>
              <li>JWT</li>
              <li>Git/Github</li>
              <li>RESTful APIs</li>
              <li>Markdown</li>
            </ul>
            <h4>General</h4>
            <ul>
              <li>Problem Solving</li>
              <li>Teamwork</li>
              <li>Documentation</li>
              <li>Personal Communication</li>
              <li>Professional Communication</li>
              <li>Time Management</li>
            </ul>
            <h4>Familiar</h4>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>Chai</li>
              <li>Jasmine</li>
              <li>Stripe</li>
              <li>D3</li>
            </ul>
            <h4>Learning</h4>
            <ul>
              <li>TypeScript</li>
              <li>C#</li>
              <li>Unity</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
