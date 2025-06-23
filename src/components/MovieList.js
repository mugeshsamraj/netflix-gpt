import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title,movies}) {  
   if (!movies || movies.length === 0 || !movies[0]?.poster_path) {
    return null;
  }

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold py-4'>{title}</h1>
      <div className='flex overflow-x-scroll scrollbar-hide space-x-4' >
        
        <div className='flex'>
          {movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
          
        </div>
      </div>
      
    </div>
  )
}

export default MovieList
