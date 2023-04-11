import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBook, getBooks, getCategories } from "services/book";
import { IBook } from "store/types/book";
import { IFilterFields } from "types";

export const fetchBooksThunk = createAsyncThunk<IBook[], IFilterFields | undefined, { rejectValue: string }>(
  "fetchBooks",
  async (params, { rejectWithValue }) => {
    return getBooks(params)
      .then(({ data }) => data)
      .catch((e) => rejectWithValue(e.message));
  }
);

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
