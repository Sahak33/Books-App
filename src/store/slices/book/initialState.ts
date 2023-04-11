import { IInitialBook } from "store/types/book";

export const initialState: IInitialBook = {
  books: [],
  book: {},
  loading: false,
  error: "",
};
