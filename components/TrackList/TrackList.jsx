import axios from "axios";
import { useState, useEffect } from "react";

const TrackList = () => {
  const [songs, setSongs] = useState([]);
  console.log(import.meta.env.VITE_BACKEND_URL);

  const getAllSongs = async () => {
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/songs/list`;

      const response = await axios.get(url);
      console.log("in Function");

      console.log(response);
      setSongs(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllSongs();
  }, []);

  return (
    <div>
      <ol>
        {songs.length ? (
          songs.map((song) => {
            return (
              <>
                <p>
                  {song.title} by {song.artist}
                </p>
              </>
            );
          })
        ) : (
          <p>loading...</p>
        )}
      </ol>
    </div>
  );
};

export default TrackList;
