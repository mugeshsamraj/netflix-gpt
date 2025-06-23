import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/contants";

const useMovieTrailer = (movieId) => {
const dispatch = useDispatch();
 const currentTrailer = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
    const json = await data.json();
    const filterData = json.results.filter(video => video.type === 'Trailer')
    const trailer = filterData.length > 0 ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer))
  }
  useEffect(()=>{
      if (!currentTrailer || currentTrailer.movieId !== movieId) {
      getMovieVideos()
    }
  
  },[movieId])
}
export default useMovieTrailer;