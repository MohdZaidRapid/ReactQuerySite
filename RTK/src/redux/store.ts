import { configureStore } from "@reduxjs/toolkit";
import { posts } from "./api";
import { myReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    [posts.reducerPath]: posts.reducer,
    [myReducer.name]: myReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(posts.middleware),
});
