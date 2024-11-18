import React from 'react';
import '../styles/AnalysisPage.css';

const AnalysisPage = () => {
  return (
    <div className="analysis-page">
      <header className="navbar">
        <img src="logo.png" alt="Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="/home">HOME</a></li>
            <li><a href="/data">DATA</a></li>
            <li><a href="/user">USER</a></li>
            <li><a href="/analysis">ANALYSIS</a></li>
            <li><a href="/settings">SETTINGS</a></li>
          </ul>
        </nav>
      </header>

      <div className="content">
        <div className="gauge-chart">
          {/* Gauge chart goes here */}
          <div className="gauge">
            <div className="gauge-needle"></div>
          </div>
        </div>

        <div className="graphs">
          <div className="line-graph">
            <h3>Line graph of user Data</h3>
            {/* You can add a Line Chart component here */}
            <svg width="300" height="200">
              <polyline
                fill="none"
                stroke="black"
                strokeWidth="2"
                points="0,150 50,100 100,150 150,50 200,80 250,100 300,50"
              />
            </svg>
          </div>

          <div className="bar-graph">
            <h3>Bar graph on type of data</h3>
            {/* You can add a Bar Chart component here */}
            <svg width="300" height="200">
              <rect x="50" y="50" width="40" height="150" fill="#c5b3e6" />
              <rect x="150" y="100" width="40" height="100" fill="#c5b3e6" />
              <rect x="250" y="150" width="40" height="50" fill="#c5b3e6" />
              <text x="50" y="180" fill="black">Text</text>
              <text x="150" y="180" fill="black">Audio</text>
              <text x="250" y="180" fill="black">Video</text>
            </svg>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>all rights reserved at data dialect©2024</p>
      </footer>
    </div>
  );
};

export default AnalysisPage;
