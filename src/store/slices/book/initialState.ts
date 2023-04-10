import { IInitialBook } from "store/types/book";

export const initialState: IInitialBook = {
  books: [],
  loading: false,
  error: "",
};
