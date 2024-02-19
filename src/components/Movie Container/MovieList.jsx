import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, popular }) => {
  return (
    <div className="p-3  text-white">
      <h1 className="text-3xl  py-4">{title}</h1>
      <div className="flex overflow-x-scroll w-full p-6 h-[30%] ">
        <div className="flex">
          {movies &&
            movies?.map((movies) => (
              <MovieCard key={movies.id} posterPath={movies?.poster_path} />
            ))}
          {popular &&
            popular?.map((popular) => (
              <MovieCard key={popular.id} posterPath={popular?.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
