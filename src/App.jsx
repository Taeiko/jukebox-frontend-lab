// src/App.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import SongList from "../components/TrackList/TrackList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import TrackList from "../components/TrackList/TrackList";
import TrackForm from "../components/TrackfForm/TrackForm";
const App = () => {
  const [formIsShown, setFormIsShown] = useState(true) 

  const handleShowList = ()=> {
    setFormIsShown(!formIsShown)
  }
  return (
    <>
    <h1>Welcome to the jukebox</h1>
    <button onClick={handleShowList}>Show Form</button>
    <TrackList/>
    {
      formIsShown
      ?
      <TrackForm setFormIsShown={setFormIsShown}/>
      :
      
      <>
      </>
    }
    </>
  )
  
};
// test comment
export default App;
