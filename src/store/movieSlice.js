import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name : "movies",
  initialState : {
    nowPlayingMovies:null,
    popularMovies:null,
    upcomingMovies:null,
    topRatedMovies:null,
    searchMovie:null,
    trailerVideo:null,
    searchQuery:'',
  },
  reducers: {
    addNowPlayingMovies : (state,action)=>{
      state.nowPlayingMovies = action.payload; 
    },
     addPopularMovies : (state,action)=>{
      state.popularMovies = action.payload; 
    },
     addUpcomingMovies : (state,action)=>{
      state.upcomingMovies = action.payload; 
    },
    addTopRated:(state,action)=>{
      state.topRatedMovies = action.payload;
    },
    addSearchMovies:(state,action)=>{
      state.searchMovie = action.payload;
    },
    addTrailerVideo: (state,action) => {
      state.trailerVideo = action.payload;
    },
     setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;  // ✅ Save query in Redux
    },
    
  }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addUpcomingMovies,addTopRated,addSearchMovies,setSearchQuery}= movieSlice.actions;
export default movieSlice.reducer; 