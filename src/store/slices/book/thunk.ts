import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBook } from "services/book";
import { IBook } from "store/types/book";

export const fetchBookThunk = createAsyncThunk<IBook, string, { rejectValue: string }>(
  "fetchBook",
  async (data, { rejectWithValue }) => {
    return getBook(data)
      .then(({ data }) => data)
      .catch((e) => rejectWithValue(e.message));
  }
);
