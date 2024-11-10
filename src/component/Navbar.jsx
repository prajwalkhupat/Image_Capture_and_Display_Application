

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-section camera-section">
          <Link to="/" className="nav-link">Camera</Link>
        </div>
        <div className="nav-section gallery-section">
          <Link to="/gallery" className="nav-link">Gallery</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
