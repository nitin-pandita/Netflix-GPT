import { createSlice } from "@reduxjs/toolkit";

const createMovieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export const { addNowPlayingMovies } = createMovieSlice.actions;
export default createMovieSlice.reducer;
