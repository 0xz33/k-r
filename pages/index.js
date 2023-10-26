// pages/index.js

import { useEffect, useState } from "react";
import Playlist from "../components/Playlist";

export default function Home() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const res = await fetch("/api/spotify");
      const data = await res.json();
      setPlaylists(data.playlists);
    };

    fetchPlaylists();
  }, []);

  return (
    <div>
      <h1>Spotify Playlists</h1>
      {playlists.map((playlist, index) => (
        <Playlist key={index} playlist={playlist} />
      ))}
    </div>
  );
}
