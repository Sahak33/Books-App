import { IInitialBook } from "store/types/book";

export const initialState: IInitialBook = {
  books: [],
  book: {},
  categories: [],
  loading: false,
  error: "",
};
