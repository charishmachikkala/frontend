import React from 'react';
import './UserPage.css';

const User = () => {
  return (
    <div className="user-page">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <img src="path-to-your-logo.png" alt="Data Dialect Logo" />
        </div>
        <nav className="navbar">
          <a href="#">HOME</a>
          <a href="#">DATA</a>
          <a href="#">USER</a>
          <a href="#">ANALYSIS</a>
          <a href="#">SETTINGS</a>
        </nav>
      </header>

      {/* Content Section */}
      <main className="content">
        <div className="data-row">
          <div className="data-item">
            <div className="data-icon">👤</div>
            <div className="data-text">
              <p>Time : 23hr</p>
              <p>Data: 100</p>
              <p>Visits: 233</p>
            </div>
          </div>

          <div className="data-item">
            <div className="data-icon">👤</div>
            <div className="data-text">
              <p>Time : 23hr</p>
              <p>Data: 100</p>
              <p>Visits: 233</p>
            </div>
          </div>

          <div className="data-item">
            <div className="data-icon">👤</div>
            <div className="data-text">
              <p>Time : 23hr</p>
              <p>Data: 100</p>
              <p>Visits: 233</p>
            </div>
          </div>

          <div className="data-item">
            <div className="data-icon">👤</div>
            <div className="data-text">
              <p>Time : 23hr</p>
              <p>Data: 100</p>
              <p>Visits: 233</p>
            </div>
          </div>

          <div className="data-item">
            <div className="data-icon">👤</div>
            <div className="data-text">
              <p>Time : 23hr</p>
              <p>Data: 100</p>
              <p>Visits: 233</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>all rights reserved at data dialect@2024</p>
      </footer>
    </div>
  );
};

export default User;
