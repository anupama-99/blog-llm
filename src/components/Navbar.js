import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Importing CSS for Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="../assets/WriteLabs_logo.png" alt="" className="navbar-logo-img" />
          WriteLabs
        </Link>
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/register" className="navbar-link">Register</Link>
          </li>
          <li className="navbar-item">
            <Link to="/createblog" className="navbar-link">Create Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
