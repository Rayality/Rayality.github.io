import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import introControlSlice  from "./introSlice";

export const store = configureStore({
  reducer: {
    introControl: introControlSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(),
});

setupListeners(store.dispatch);
