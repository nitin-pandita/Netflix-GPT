import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./Movie Container/MainContainer";
import SecondaryContainer from "./Movie Container/SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="overflow-x-hidden">
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
