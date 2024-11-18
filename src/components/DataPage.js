import React from "react";
import "../styles/DataPage.css";// Assuming you create this CSS file to store your styles

function App() {
  // Email approval handler functions
  const acceptEmail = (userId) => {
    alert(`Email from ${userId} has been accepted.`);
    document.getElementById(userId).remove();
  };

  const rejectEmail = (userId) => {
    alert(`Email from ${userId} has been rejected.`);
    document.getElementById(userId).remove();
  };

  return (
    <div>
      {/* Header */}
      <header className="headerrr">
        <img src="https://via.placeholder.com/50" alt="Data Dialect Logo" />
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <a href="#">
          <i className="fas fa-home"></i>
          <span>HOME</span>
        </a>
        <a href="#">
          <i className="fas fa-database"></i>
          <span>DATA</span>
        </a>
        <a href="#">
          <i className="fas fa-user"></i>
          <span>USER</span>
        </a>
        <a href="#">
          <i className="fas fa-chart-bar"></i> ANALYSIS
        </a>
        <a href="#">
          <i className="fas fa-cog"></i>
          <span>SETTINGS</span>
        </a>
      </nav>

      {/* Content */}
      <div className="content">
        {/* Data Management Section */}
        <div className="data-box">
          <div className="symbol-containerr">
            <i className="fas fa-text-height"></i>
          </div>
          <div className="text-section">
            <h2>400</h2>
            <p>Manage text data</p>
          </div>
        </div>

        <div className="data-box">
          <div className="symbol-containerr">
            <i className="fas fa-headphones"></i>
          </div>
          <div className="text-section">
            <h2>600</h2>
            <p>Manage audio data</p>
          </div>
        </div>

        <div className="data-box">
          <div className="symbol-containerr">
            <i className="fas fa-video"></i>
          </div>
          <div className="text-section">
            <h2>323</h2>
            <p>Manage video data</p>
          </div>
        </div>
      </div>

      {/* Approval Section */}
      <div className="approval-section">
        <h3>User Mail Approvals</h3>
        <div className="approval-item" id="user1">
          <input type="text" defaultValue="user1@example.com" />
          <i className="fas fa-check" onClick={() => acceptEmail("user1")}></i>
          <i className="fas fa-times" onClick={() => rejectEmail("user1")}></i>
        </div>
        <div className="approval-item" id="user2">
          <input type="text" defaultValue="user2@example.com" />
          <i className="fas fa-check" onClick={() => acceptEmail("user2")}></i>
          <i className="fas fa-times" onClick={() => rejectEmail("user2")}></i>
        </div>
        <div className="approval-item" id="user3">
          <input type="text" defaultValue="user3@example.com" />
          <i className="fas fa-check" onClick={() => acceptEmail("user3")}></i>
          <i className="fas fa-times" onClick={() => rejectEmail("user3")}></i>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        all rights reserved at data dialect@2024
      </footer>
    </div>
  );
}

export default App;
