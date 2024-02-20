import React from "react";
import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
const VideoTitle = ({ title, original_language, popularity, overview }) => {
  return (
    <div className="pt-[6%] md:pt-[10%] px-5 md:px-10 absolute text-white bg-gradient-to-r from-black w-full h-screen aspect-video ">
      <h1 className="text-3xl font-bold md:text-6xl">{title}</h1>
      <p>
        Language:{" "}
        <span className="text-blue-500 text-sm md:text-xl font-bold">
          {original_language}
        </span>
      </p>
      <p className="hidden md:block py-2 md:py-6 text-[10px] md:text-lg w-1/2 md:w-1/3">
        {overview}
      </p>
      <p className="mb-2 md:mb-5 hidden md:block">
        Rating: <span className="text-yellow-400 font-bold">{popularity}</span>
      </p>
      <div className="flex">
        <button className="flex items-center bg-white text-black font-semibold mt-14 md:mt-0 px-2 py-1 md:px-5 md:py-2  rounded-sm border border-black hover:bg-gray-300 hover:text-black transition duration-300 ease-in-out text-[12px] md:text-[20px] ">
          <FaPlay className="mx-2" />
          Play
        </button>
        <button className="flex items-center justify-between bg-[#414341] text-white px-2 md:px-5 md:py-2  rounded-sm opacity-90 ml-3 transition duration-300 ease-in-out  mt-14 md:mt-0 hover:bg-gray-100 hover:text-black hover:opacity-100 text-[12px] md:text-[20px]">
          <GoInfo className="mx-2 text-sm md:text-[17px]" /> More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
