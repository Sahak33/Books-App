import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default bookSlice.reducer;
