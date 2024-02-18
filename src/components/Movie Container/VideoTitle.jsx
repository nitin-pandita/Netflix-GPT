import React from "react";
import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
const VideoTitle = ({ title, original_language, popularity, overview }) => {
  return (
    <div className="pt-[18%] px-10 absolute text-white bg-gradient-to-r from-black w-screen h-screen aspect-video ">
      <h1 className="text-6xl">{title}</h1>
      <p>
        Language:{" "}
        <span className="text-blue-500 text-xl font-bold">
          {original_language}
        </span>
      </p>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <p className="mb-5">
        Rating: <span className="text-yellow-400 font-bold">{popularity}</span>
      </p>
      <div className="flex">
        <button className="flex items-center bg-white text-black font-semibold px-5 py-2  rounded-sm border border-black hover:bg-gray-300 hover:text-black transition duration-300 ease-in-out">
          <FaPlay className="mx-2" />
          Play
        </button>
        <button className="flex items-center justify-between bg-[#414341] text-white px-5 py-2  rounded-sm opacity-90 ml-3 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-black hover:opacity-100">
          <GoInfo size={"17px"} className="mx-2" /> More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
