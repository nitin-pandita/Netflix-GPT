import { BG_IMG } from "../../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";

const GptSearch = () => {
  return (
    <div className="">
      <div className="fixed -z-10">
        <img src={BG_IMG} alt="Background Image" />
      </div>
      <GptSearchBar />
      <GptSuggestions />
    </div>
  );
};

export default GptSearch;
