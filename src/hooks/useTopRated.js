import React from 'react'
import { useDispatch } from "react-redux";
import {  addTopRated, addUpcomingMovies } from "../store/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/contants";

const useTopRated = () => {
   const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addTopRated(json.results))
  }

  useEffect(()=>{
    getTopRatedMovies()
  },[])
}
export default useTopRated;

