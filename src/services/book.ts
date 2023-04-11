import AxiosInstance from "lib/Instance";
import { GET_BOOK, GET_BOOKS, GET_CATEGORIES } from "urls/book";

export const getBooks = (data: { price?: string; category?: string; date?: string } | undefined) =>
  AxiosInstance(GET_BOOKS(data));

export const getBook = (id: string) => AxiosInstance(GET_BOOK(id));
export const getCategories = () => AxiosInstance(GET_CATEGORIES);
