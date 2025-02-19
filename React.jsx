import React, { useState } from 'react';
import './Tabs.css';

function Tabs() {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tabs-container">
      <h1 className="about-me-title">About Me</h1>
      <p className="about-me-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
        <button
          className={activeTab === 'internship' ? 'tab-link active' : 'tab-link'}
          onClick={() => openTab('internship')}
        >
          Internship
        </button>
      </div>

      {activeTab === 'skills' && (
        <div className="tab-contents skills-theme">
          <ul>
            <li><span>UI/UX</span><br />Designing Web/App interfaces</li>
            <li><span>Web Development</span><br />Web app Development</li>
            <li><span>App Development</span><br />Building Android/iOS apps</li>
          </ul>
        </div>
      )}

      {activeTab === 'education' && (
        <div className="tab-contents education-theme">
          <ul>
            <li>
              <span>MASTER OF SCIENCE IN APPLIED COMPUTER SCIENCE - 2026</span><br />
              Grand Valley State University, Michigan, USA
              <ul>
                <li>Data Engineering: Mastered ETL pipelines, database management, and distributed computing for large-scale data processing</li>
                <li>Data Mining: Applied clustering, classification, and predictive modeling to derive actionable insights</li>
                <li>System Analysis and Design: Designed robust systems through UML modeling and SDLC methodologies</li>
              </ul>
            </li>
            <li>
              <span>BACHELOR OF ENGINEERING IN COMPUTER SCIENCE - Jul 2020 - Jul 2024</span><br />
              Jansons Institute Of Technology, India<br />
              CGPA: 8.5
            </li>
          </ul>
        </div>
      )}

      {activeTab === 'internship' && (
        <div className="tab-contents internship-theme">
          <ul>
            <li><span>Web Development Internship</span><br />Corizo (ID: 1739622063350)</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Tabs;



