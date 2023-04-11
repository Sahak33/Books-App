import AxiosInstance from "lib/Instance";
import { IFilterFields } from "types";
import { GET_BOOK, GET_BOOKS, GET_CATEGORIES } from "urls/book";

export const getBooks = (params: IFilterFields | undefined) =>
  AxiosInstance(GET_BOOKS, {
    params,
  });

export const getBook = (id: string) => AxiosInstance(GET_BOOK(id));
export const getCategories = () => AxiosInstance(GET_CATEGORIES);
