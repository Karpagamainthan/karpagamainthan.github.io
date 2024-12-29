import React from 'react';
import profileImg from '../assets/images/profile.jpg';
import '../assets/styles/Header.css';

function Header() {
  return (
    <header className="header-container">
      <section className="welcome-section">
        <div className="profile-container">
          <div className="welcome-text">
            <h1>Welcome to Karpagamainthan's Portfolio</h1>
            <p>Explore my projects, skills, and achievements in this interactive portfolio.</p>
          </div>
          <img src={profileImg} alt="Karpagamainthan" className="profile-img" />
        </div>
      </section>

      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
