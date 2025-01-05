import React from "react";
import "../../styles/components/Home/_home.scss";

const Home = () => {
  const featuredPlaylists = [
    {
      id: 1,
      title: "Top Hits 2024",
      image: "https://via.placeholder.com/200",
      description: "The hottest tracks right now"
    },
    // Thêm các playlist khác
  ];

  const newReleases = [
    {
      id: 1,
      title: "Midnight",
      artist: "Taylor Swift",
      image: "https://via.placeholder.com/200"
    },
    // Thêm các bài hát khác
  ];

  return (
    <div className="home">
      <section className="featured-section">
        <h2>Featured Playlists</h2>
        <div className="playlist-grid">
          {featuredPlaylists.map(playlist => (
            <div key={playlist.id} className="playlist-card">
              <img src={playlist.image} alt={playlist.title} />
              <h3>{playlist.title}</h3>
              <p>{playlist.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="new-releases">
        <h2>New Releases</h2>
        <div className="songs-grid">
          {newReleases.map(song => (
            <div key={song.id} className="song-card">
              <img src={song.image} alt={song.title} />
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;