import { useSelector } from "react-redux";
import usePopularMovies from "../../hooks/usePopularMovies";
import MovieList from "./MovieList";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-[18rem] pr-3 relative z-20 ">
        <MovieList title={"Now Playing"} movies={movies.movie} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular Movies"} popular={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>

      {/* 
    
      Movie List - Popular
        - Cards
      Movie List - Now Playing
        - Cards
      Movie List - Top Rated
        - Cards
      Movie List - Upcoming
        - Cards


    */}
    </div>
  );
};

export default SecondaryContainer;
