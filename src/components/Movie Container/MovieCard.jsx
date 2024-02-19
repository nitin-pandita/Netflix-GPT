import React from "react";
import { IMAGE_URL } from "../../utils/constants";
const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 m-2 hover:translate-y-[-20px] transition ease-in cursor-pointer ">
      <img className="w-full" src={IMAGE_URL + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
