import { createSlice } from "@reduxjs/toolkit";

const createMovieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.movie = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } =
  createMovieSlice.actions;
export default createMovieSlice.reducer;
