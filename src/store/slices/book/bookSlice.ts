import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { fetchBookThunk } from "./thunk";

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default bookSlice.reducer;
