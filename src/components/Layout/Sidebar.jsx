import React from "react";
import { Link } from "react-router-dom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddIcon from "@mui/icons-material/Add";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav nav-menu">
        <Link to="/" className="nav-item active">
          <GraphicEqIcon />
          <span>Feed</span>
        </Link>
        <Link to="/playlists" className="nav-item">
          <QueueMusicIcon />
          <span>Playlists</span>
        </Link>
        <Link to="/library" className="nav-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="statistics-icon"
          >
            <path d="M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm128-64l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32zM480 96l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
          </svg>
          <span>Statistics</span>
        </Link>
      </nav>
      <div className="yourMusic nav-menu">
        <h2 className="yourMusic-title">YOUR MUSIC</h2>
        <Link to="/favorites" className="nav-item">
          <FavoriteBorderIcon />
          <span>Favorites</span>
        </Link>
        <Link to="/listen-later" className="nav-item">
          <AccessTimeIcon />
          <span>Listen Later</span>
        </Link>
        <Link to="/history" className="nav-item">
          <CalendarMonthIcon />
          <span>History</span>
        </Link>
        <Link to="/history" className="nav-item">  
          <PodcastsIcon />
          <span>Podcasts</span>
        </Link>
      </div>
      <div className="your-playlists nav-menu">
        <h2 className="your-playlists-title">YOUR PLAYLISTS</h2>
        <div className="your-playlists-1 nav-item">
          <span className="your-playlists-1-dot"></span>
          <span>Metalcore</span>
        </div>
        <div className="your-playlists-2 nav-item">
          <span className="your-playlists-2-dot"></span>
          <span>Electro</span>
        </div>
        <div className="your-playlists-3 nav-item">
          <span className="your-playlists-3-dot"></span>
          <span>Metalcore</span>
        </div>
        {/* <div className="your-playlists-4 nav-item">
          <span className="your-playlists-4-dot"></span>
          <span>Electro</span>
        </div> */}
        <Link to="/createNewPlaylist" className="create-new-playlist nav-item">
          <span className="create-playlist-text">Create new playlist</span>
          <AddIcon className="create-playlist-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
