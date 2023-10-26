// components/Playlist.js

import PropTypes from "prop-types";
import styles from "../styles/Playlist.module.css";

function Playlist({ playlist }) {
  return (
    <div className={styles.playlist}>
      <h2>{playlist.name}</h2>
      <img
        src={playlist.images[0]?.url}
        alt={playlist.name}
        className={styles.playlistImage}
      />
      <p>{playlist.description}</p>
      <a
        href={playlist.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open in Spotify
      </a>
    </div>
  );
}

Playlist.propTypes = {
  playlist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    description: PropTypes.string.isRequired,
    external_urls: PropTypes.shape({
      spotify: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Playlist;
