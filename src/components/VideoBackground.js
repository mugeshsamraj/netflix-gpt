import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/contants'

function VideoBackground({movieId}) {
  const getMovieVideos = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/574475/videos?language=en-US', API_OPTIONS)
    const result = await data.json();
    console.log(result,"999")
  }
  useEffect(()=>{
    getMovieVideos()
  },[])
  return (
    <div>
      helo
    </div>
  )
}

export default VideoBackground
