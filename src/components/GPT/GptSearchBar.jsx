import React from "react";
import language from "../../utils/LanguageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const lang = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center items-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={language[lang].GptSearchBar.placeholder}
          className="p-4 m-4  bg-gray-800 text-white rounded-sm col-span-9"
        />
        <button className="py-2 m-4 px-4 col-span-3 bg-netflixRed text-white rounded-sm ">
          {language[lang].GptSearchBar.button}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
