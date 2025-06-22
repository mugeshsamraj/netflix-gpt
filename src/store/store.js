// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesSlice from './movieSlice';
import searchSlice from './searchSlice';
import configReducer from './configSlice';


const store = configureStore({
  reducer: {
    user: userReducer,
    movies:moviesSlice,
    gpt:searchSlice,
    config:configReducer,
  }
});

export default store;
