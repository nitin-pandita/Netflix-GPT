import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./Movie Container/MainContainer";
import SecondaryContainer from "./Movie Container/SecondaryContainer";
import GptSearch from "./GPT/GptSeach";
import { useSelector } from "react-redux";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRated();

  const showGPTSeach = useSelector((state) => state.gpt.showGptSearch);
  return (
    <div className="">
      <Header />
      {showGPTSeach ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />

          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
