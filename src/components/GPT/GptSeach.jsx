import { BG_IMG } from "../../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";

const GptSearch = () => {
  return (
    <>
      <div className="fixed md:absolute -z-10">
        <img
          src={BG_IMG}
          alt="Background Image"
          className="h-screen w-screen object-cover"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
