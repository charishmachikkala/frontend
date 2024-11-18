import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CheckBox from './components/checkbox';  // Ensure this matches the actual file name
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignPage from './components/SignPage';
import MainPage from './components/MainPage';  // Ensure this exists
import DataPage from './components/DataPage';
import UserPage from './components/UserPage';
import SettingsPage from './components/SettingsPage';
import AnalysisPage from './components/AnalysisPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/check" element={<CheckBox />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign" element={<SignPage />} />
        <Route path="/data" element={<DataPage />} />
        <Route path="/User" element={<UserPage />} />
        <Route path="/Settings" element={<SettingsPage />} />
        <Route path="/Analysis" element={<AnalysisPage />} />
        
         </Routes>
    </Router>
  );
};

export default App;
