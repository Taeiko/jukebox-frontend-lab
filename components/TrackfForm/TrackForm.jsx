import React, { useState } from "react";
import axios from "axios";
import {create} from '../../lib/api'
const TrackForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return isSubmitting(true);
    console.log(formData);

    const response = await create(formData);
    console.log(response)
    setIsSubmitting(false);
  };
  return (
    <div>
      <h2>Add a song</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">title</label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="artist">artist</label>
        <input
          id="artist"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default TrackForm;
