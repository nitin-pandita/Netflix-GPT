import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../Movie Container/MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const movieName = gpt.movieName;
  const movieResult = gpt.movieResult;

  if (!movieName) return null;

  return (
    <div className="p-2 m-2 bg-black text-white bg-opacity-70">
      <div>
        {movieName.map((movie, index) => (
          <MovieList
            key={index}
            title={movie}
            movies={movieResult[index]}
            popular={false}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
