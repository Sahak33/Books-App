import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBook, getBooks, getCategories } from "services/book";
import { IBook } from "store/types/book";

export const fetchBooksThunk = createAsyncThunk<
  IBook[],
  { price: string; category: string; date: string } | undefined,
  { rejectValue: string }
>("fetchBooks", async (data, { rejectWithValue }) => {
  return getBooks(data)
    .then(({ data }) => data)
    .catch((e) => rejectWithValue(e.message));
});

export const fetchBookThunk = createAsyncThunk<IBook, string, { rejectValue: string }>(
  "fetchBook",
  async (data, { rejectWithValue }) => {
    return getBook(data)
      .then(({ data }) => data)
      .catch((e) => rejectWithValue(e.message));
  }
);

export const fetchCategoriesThunk = createAsyncThunk<{ id: number; name: string }[], undefined, { rejectValue: string }>(
  "fetchCategories",
  async (_, { rejectWithValue }) => {
    return getCategories()
      .then(({ data }) => data)
      .catch((e) => rejectWithValue(e.message));
  }
);
