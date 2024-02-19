import { createSlice } from "@reduxjs/toolkit";

const createMovieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: null,
    trailerVideo: null,
    popularMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.movie = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRateMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addUpcomingMovies,
  addTopRateMovies,
} = createMovieSlice.actions;
export default createMovieSlice.reducer;
