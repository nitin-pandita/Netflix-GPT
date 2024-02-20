import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { addNowPlayingMovies } from "../../redux/movieSlice";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.movie);
  if (!movies) return;
  const renderMovie = movies[2];
  // extracting data from the render Movie
  const {
    original_title,
    original_language,
    popularity,
    vote_average,
    overview,
    id,
  } = renderMovie;
  return (
    <div className="pt-[38%] md:pt-0 bg-black">
      <VideoTitle
        title={original_title}
        original_language={original_language}
        popularity={vote_average}
        overview={overview}
      />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
