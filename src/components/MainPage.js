import React from 'react';
import { Link } from 'react-router-dom';
import data from '../images/data.png';
import linechart from '../images/linechart.jpeg';
import bargraph from '../images/bargraph.jpeg';
import "../styles/MainPage.css"; // Ensure this file name matches exactly
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faHouse, faChartSimple, faGear ,faDatabase} from '@fortawesome/free-solid-svg-icons';
const MainPage = () => {
    return (
        <div className="mainpage">
            {/* Header */}
            <header className="header">
                <div className="logo">
                <img src={data} alt="Data Dialect" 
                        className="logo-img" 
                    />
                </div>

                <nav className="navbar">
                    <Link to="/" className="nav-link">
                    <FontAwesomeIcon icon={faHouse}/><span>HOME</span>
                    </Link>
                    <Link to="/data" className="nav-link">
                    <FontAwesomeIcon icon={faDatabase} /><span>DATA</span>
                    </Link>
                    <Link to="/user" className="nav-link">
                    <FontAwesomeIcon icon={faUser} /><span>USER</span>
                    </Link>
                    <Link to="/analysis" className="nav-link">
                    <FontAwesomeIcon icon={faChartSimple} /><span>ANALYSIS</span>
                    </Link>
                    <Link to="/settings" className="nav-link">
                        <FontAwesomeIcon icon={faGear} /><span>SETTINGS</span>
                    </Link>
                </nav>
            </header>

            {/* Main Content */}
            <main className="content">
                <h2>Summary of the web</h2>

                {/* Summary Section */}
                <section className="summary">
                    <div className="summary-containerrr">
                        <div className="icon-containerrr">
                            <i className="fas fa-eye"></i>
                        </div>
                        <div>
                            <p>2,345</p>
                            <span>Daily Visits</span>
                        </div>
                    </div>

                    <div className="summary-containerrr">
                        <div className="icon-containerrr">
                            <i className="fas fa-database"></i>
                        </div>
                        <div>
                            <p>1,323</p>
                            <span>Data Entered</span>
                        </div>
                    </div>

                    <div className="summary-containerrr">
                        <div className="icon-containerrr">
                            <i className="fas fa-comments"></i>
                        </div>
                        <div>
                            <p>456</p>
                            <span>Feedback Received</span>
                        </div>
                    </div>
                </section>

                {/* Graph Section */}
                <section className="graphs">
                    <div className="graph">
                        <h3>Line graph of user Data</h3>
                        <img src={linechart} alt="Line graph showing user data trends" />
                    </div>
                    <div className="graph">
                        <h3>Bar graph on type of data</h3>
                        <img src={bargraph} alt="Bar graph showing data types" />
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <p>All rights reserved at Data Dialect © 2024</p>
            </footer>
        </div>
    );
};

export default MainPage;
