import axios from 'axios'
import { useState, useEffect } from 'react'

const SongList = () => {
    const [songs , setSongs] = useState([])
    console.log(import.meta.env.VITE_BACKEND_URL)

    const getAllSongs = async () => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/songs`
    const response = await axios.get(url)
    console.log(response)
    setSongs(response.data)
    }

    useEffect(() => {
      getAllSongs()
    }, [])

  return (
    <div>
      <ol>
        {
          songs.length ? songs.map(song => {
          return (
            <>
            <p>{song.title}</p>
            </>
          )
        }
        ) : <p>loading...</p> 
        }
      </ol>
    </div>
  )
}

export default SongList

