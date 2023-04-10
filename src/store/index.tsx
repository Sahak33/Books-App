import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./slices/book/bookSlice";

const store = configureStore({
  reducer: {
    book: bookSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
