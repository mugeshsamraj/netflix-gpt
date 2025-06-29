import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../store/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/contants";

const useUpcoming = () => {
   const dispatch = useDispatch();
  const getUpcoming = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addPopularMovies(json.results))
  }

  useEffect(()=>{
    getUpcoming()
  },[])
}
export default useUpcoming;