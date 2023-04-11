import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { fetchBooksThunk, fetchBookThunk, fetchCategoriesThunk } from "./thunk";

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooksThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.books = payload;
        state.error = "";
      })
      .addCase(fetchBooksThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.books = null;
        state.error = payload;
      })
      .addCase(fetchBookThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBookThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.book = payload;
        state.error = "";
      })
      .addCase(fetchBookThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.book = null;
        state.error = payload;
      })
      .addCase(fetchCategoriesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategoriesThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload;
        state.error = "";
      })
      .addCase(fetchCategoriesThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.categories = [];
        state.error = payload;
      });
  },
});

export default bookSlice.reducer;
