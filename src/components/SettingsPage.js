import React from 'react';
import './SettingsPage.css';


const Settings = () => {
  return (
    <div>
      <div className="header">
        <div className="nav">
          <a href="#"><i className="fas fa-home"></i> HOME</a>
          <a href="#"><i className="fas fa-database"></i> DATA</a>
          <a href="#"><i className="fas fa-user"></i> USER</a>
          <a href="#"><i className="fas fa-chart-bar"></i> ANALYSIS</a>
          <a href="#"><i className="fas fa-cog"></i> SETTINGS</a>
        </div>w
      </div>

      <div className="container">
        {/* Existing Containers */}
        <div className="card">
          <div className="circle"><i className="fas fa-image"></i></div>
          <div className="content">Logo</div>
          <button className="edit-btn">EDIT</button>
        </div>
        <div className="card">
          <div className="circle"><i className="fas fa-heading"></i></div>
          <div className="content">Title</div>
          <button className="edit-btn">EDIT</button>
        </div>
        <div className="card">
          <div className="circle"><i className="fas fa-address-card"></i></div>
          <div className="content">Contact info</div>
          <button className="edit-btn">EDIT</button>
        </div>
        <div className="card">
          <div className="circle"><i className="fas fa-bell"></i></div>
          <div className="content">Alerts for content submissions, approvals, system updates.</div>
          <button className="edit-btn">EDIT</button>
        </div>
        <div className="card">
          <div className="circle"><i className="fas fa-plug"></i></div>
          <div className="content">Third-party APIs</div>
          <button className="edit-btn">EDIT</button>
        </div>

        {/* New Containers for NLP Settings */}
        <div className="card">
          <div className="circle"><i className="fas fa-cogs"></i></div>
          <div className="content">Text Preprocessing</div>
          <button className="edit-btn">EDIT</button>
        </div>
        <div className="card">
          <div className="circle"><i className="fas fa-robot"></i></div>
          <div className="content">Model Training</div>
          <button className="edit-btn">EDIT</button>
        </div>
        <div className="card">
          <div className="circle"><i className="fas fa-chart-line"></i></div>
          <div className="content">Evaluation</div>
          <button className="edit-btn">EDIT</button>
        </div>
        <div className="card">
          <div className="circle"><i className="fas fa-sliders-h"></i></div>
          <div className="content">Hyperparameter Tuning</div>
          <button className="edit-btn">EDIT</button>
        </div>
        <div className="card">
          <div className="circle"><i className="fas fa-sync"></i></div>
          <div className="content">Data Augmentation</div>
          <button className="edit-btn">EDIT</button>
        </div>
      </div>

      <div className="footer">
        all rights reserved at data dialect@2024
      </div>

      {/* Logout Button */}
      <button className="logout-btn">LOGOUT</button>
    </div>
  );
};

export default Settings;
