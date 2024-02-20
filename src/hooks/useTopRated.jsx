import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTopRateMovies } from "../redux/movieSlice";

const useTopRated = () => {
  const dispatch = useDispatch();
  const getTopRate = useSelector((store) => store.movies.topRatedMovies);
  const popularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addTopRateMovies(json.results));
  };
  useEffect(() => {
    !getTopRate && popularMovies();
  }, []);
};

export default useTopRated;
