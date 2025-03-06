import React, { useState } from 'react';
import './style.css';  // Correct path

function Tabs() {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tabs-container">
      <h1 className="about-me-title">About Me</h1>
      <p className="about-me-description">
        I am a Full Stack Developer with a passion for scalable software solutions.
      </p>

      <div className="tabs">
        <button
          className={activeTab === 'skills' ? 'tab-link active' : 'tab-link'}
          onClick={() => openTab('skills')}
        >
          Skills
        </button>
        <button
          className={activeTab === 'education' ? 'tab-link active' : 'tab-link'}
          onClick={() => openTab('education')}
        >
          Education
        </button>
      </div>

      {activeTab === 'skills' && (
        <div className="tab-contents skills-theme">
          <ul>
            <li><span>UI/UX</span><br />Designing Web/App interfaces</li>
            <li><span>Web Development</span><br />Web app Development</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Tabs;





