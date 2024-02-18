import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { API_OPTION } from "../utils/constants.js";
const useNowPlayingMovies = () => {
  // hooks
  const dispatch = useDispatch();

  // function to get now playing movies

  const nowPlayingMovies = async () => {
    // making call
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTION
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  // making call
  useEffect(() => {
    nowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
