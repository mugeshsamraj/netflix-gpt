import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovie'

function VideoBackground({movieId}) {
  
  const trailerVideo = useSelector(store => store.movies?.trailerVideo)
  useMovieTrailer(movieId);

   if (!trailerVideo || !trailerVideo.key) {
    return <div>Loading trailer...</div> 
  }
  
  return (
     <div className="w-screen aspect-video">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoBackground
