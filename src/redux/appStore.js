import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";
import userReducer from "./userSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    config: configReducer,
  },
});

export default appStore;
