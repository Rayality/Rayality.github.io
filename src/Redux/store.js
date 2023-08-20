import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import canvasControlSlice  from "./canvasSlice";

export const store = configureStore({
  reducer: {
    canvasControl: canvasControlSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(

    ),
});

setupListeners(store.dispatch);
