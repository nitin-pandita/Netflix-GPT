import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./Movie Container/MainContainer";
import SecondaryContainer from "./Movie Container/SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRated();
  return (
    <div className="">
      <Header />
      <MainContainer />
      {/* 
      
        Main Container
          - Video Background
          - Video Title
          - Video Description
        Secondary Container
          - Movie Cards * n
            - Cards * n
      
      */}
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
