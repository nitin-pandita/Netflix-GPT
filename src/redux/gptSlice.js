import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovie: null,
    movieName: null,
    movieResult: null,
  },

  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovie: (state, action) => {
      const { movieName, movieResult } = action.payload;
      state.gptMovie = { movieName, movieResult }; // Set gptMovie to an object with movieName and movieResult
      state.movieName = movieName;
      state.movieResult = movieResult;
    },
  },
});

export const { toggleGptSearch, addGptMovie } = gptSlice.actions;
export default gptSlice.reducer;
