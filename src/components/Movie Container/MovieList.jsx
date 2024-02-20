import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, popular }) => {
  return (
    <div className="pt-[20%] md:pt-2  text-white">
      <h1 className="text-lg md:text-3xl ml-4 py-2">{title}</h1>
      <div className="flex overflow-x-scroll w-full p-3 md:p-6 h-[20%] md:h-[30%] ">
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
