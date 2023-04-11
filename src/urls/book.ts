export const GET_BOOKS = (data: { price?: string; category?: string; date?: string } | undefined): string => `book/search`;
export const GET_BOOK = (id: string): string => `book/show/${id}`;
export const GET_CATEGORIES: string = "category";
