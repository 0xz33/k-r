// pages/api/spotify.js

import axios from "axios";

export default async function handler(req, res) {
  const authResponse = await axios({
    url: "https://accounts.spotify.com/api/token",
    method: "post",
    params: {
      grant_type: "client_credentials",
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: process.env.SPOTIFY_CLIENT_ID,
      password: process.env.SPOTIFY_CLIENT_SECRET,
    },
  });

  const playlistsResponse = await axios({
    url: `https://api.spotify.com/v1/users/${process.env.SPOTIFY_USER_ID}/playlists`,
    method: "get",
    headers: {
      Authorization: "Bearer " + authResponse.data.access_token,
      "Content-Type": "application/json",
    },
  });

  res.status(200).json({ playlists: playlistsResponse.data.items });
}
