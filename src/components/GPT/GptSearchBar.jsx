import React, { useRef, useState } from "react";
import language from "../../utils/LanguageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../../utils/openAI";
import { API_OPTION, MOVIE_API } from "../../utils/constants";
import { addGptMovie } from "../../redux/gptSlice";
import Loader from "../Loader";
const GptSearchBar = () => {
  //hook
  const dispatch = useDispatch();
  const searchText = useRef(null);
  // * functions

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();

    console.log(json.results);
    return json.results;
  };
  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a movie search engine and return the movies for the user." +
      searchText.current.value +
      "only give me names of five movies, comman spreated like the example result given ahead. Example Result : The ShwaShank Redumption, Don, Golmal, 3 Idiots, DDLJ";

    // make an api call to open ai and get movie results
    const getResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = getResults?.choices[0]?.message?.content.split(",");
    // for each movie we will search tmdb

    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    console.log(promiseArray);
    const tmdbMovies = await Promise.all(promiseArray);
    console.log(tmdbMovies);
    dispatch(addGptMovie({ movieName: gptMovies, movieResult: tmdbMovies }));
  };

  // * store

  const lang = useSelector((store) => store.config.lang);
  return (
    <div className="flex flex-col justify-center items-center p-2 pt-[35%] md:pt-[10%]">
      <form
        className="w-full   md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={language[lang].GptSearchBar.placeholder}
          className="p-4 m-4  bg-gray-800 text-white rounded-sm col-span-9"
        />
        <button
          className="py-2 m-4 px-4 col-span-3 bg-netflixRed text-white rounded-sm w-[90%] md:w-[80%]"
          onClick={handleGptSearch}
        >
          {language[lang].GptSearchBar.button}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
