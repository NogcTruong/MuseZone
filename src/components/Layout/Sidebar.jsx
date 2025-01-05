import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>Music App</h1>
      </div>
      <nav className="nav-menu">
        <Link to="/" className="nav-item">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </Link>
        <Link to="/search" className="nav-item">
          <i className="fas fa-search"></i>
          <span>Search</span>
        </Link>
        <Link to="/library" className="nav-item">
          <i className="fas fa-book"></i>
          <span>Your Library</span>
        </Link>
      </nav>
      <div className="playlists">
        <h2>Playlists</h2>
        <div className="playlist-list">
        </div>
      </div>
    </div>
  );
};

export default Sidebar;