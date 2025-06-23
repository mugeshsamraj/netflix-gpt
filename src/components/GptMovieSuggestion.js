import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../components/MovieList'

const GptMovieSuggestion = () => {
  const movies = useSelector(store => store.movies.searchMovie);
   if (!movies || movies.length === 0) return null;

  const filteredMovies = movies.filter(movie => movie.poster_path);

  if (filteredMovies.length === 0) return null;
  return (
    <div>
     {/* <h2 className='text-red-200 bg-green-700'>{movies.original_title}</h2> */}
       <MovieList title={movies.original_title} movies={filteredMovies} />
    </div>
  )
}

export default GptMovieSuggestion
