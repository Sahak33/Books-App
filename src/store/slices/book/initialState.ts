import { IInitialBook } from "store/types/book";

export const initialState: IInitialBook = {
  books: [],
  book: {
    authors: [],
    categories: [],
    id: 0,
    isbn: "",
    long_description: "",
    page_count: 0,
    published: {
      date: "",
      price: 0,
      currency: "",
    },
    short_description: "",
    status: "",
    thumbnail_url: "",
    title: "",
  },
  categories: [],
  loading: false,
  error: "",
};
