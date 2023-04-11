import AxiosInstance from "lib/Instance";
import { GET_BOOK } from "urls/book";

export const getBook = (id: string) => AxiosInstance(GET_BOOK(id));
