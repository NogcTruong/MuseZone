import React from 'react';

const Player = () => {
  return (
    <div className="player">
      <div className="song-info">
        <img src="song-cover.jpg" alt="Cover" />
        <div className="details">
          <h3>Song Name</h3>
          <p>Artist Name</p>
        </div>
      </div>
      
      <div className="controls">
        <button className="shuffle"><i className="fas fa-random"></i></button>
        <button className="prev"><i className="fas fa-step-backward"></i></button>
        <button className="play"><i className="fas fa-play"></i></button>
        <button className="next"><i className="fas fa-step-forward"></i></button>
        <button className="repeat"><i className="fas fa-redo"></i></button>
      </div>
      
      <div className="volume">
        <i className="fas fa-volume-up"></i>
        <input type="range" min="0" max="100" />
      </div>
    </div>
  );
};

export default Player;