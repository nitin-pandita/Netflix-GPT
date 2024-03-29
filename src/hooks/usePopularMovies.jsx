import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addPopularMovies } from "../redux/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = useSelector((store) => store.movies.popularMovies);

  const popularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    !getPopularMovies && popularMovies();
  }, []);
};

export default usePopularMovies;
