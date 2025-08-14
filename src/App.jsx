// src/App.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import SongList from "../components/TrackList/songList";

const App = () => {
  return (
    <>
    <h1>welcome to the jukebox</h1>
    <SongList />
    </>
  )
  
};
// test comment
export default App;
