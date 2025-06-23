import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addSearchMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/contants";

const useSearchMovie = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((store) => store.movies.searchQuery); // ✅ get from Redux
  console.log("Search Query from Store:", searchQuery);
  useEffect(() => {
    const getSearch = async () => {
      if (!searchQuery) return; // prevent empty calls
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json.results)
      dispatch(addSearchMovies(json.results));
    };

    getSearch();
  }, [searchQuery]); // ✅ Add `searchQuery` here
};

export default useSearchMovie;
