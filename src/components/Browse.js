import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcoming from '../hooks/useUpcoming';
import useTopRated from '../hooks/useTopRated';
import { useSelector } from 'react-redux';
import GPTSearch from './GPTSearch';
import useSearchMovie from '../hooks/useSearchMovie';

function Browse() {
  const showGptSearchData = useSelector(store => store.gpt.showGptSearch)
 useNowPlayingMovies();
 usePopularMovies();
 useUpcoming();
 useTopRated();
useSearchMovie();


  return (
    <div>
      <Header />
      {
        showGptSearchData ?  <GPTSearch /> :
        <>
        <MainContainer />
        <SecondaryContainer />
        </>
      }
    </div>
  )
}

export default Browse
