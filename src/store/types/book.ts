export interface IInitialBook {
  books: any;
  book: any;
  loading: boolean;
  error: string | undefined;
}

export interface IBook {
  authors: string[];
  categories: string[];
  id: number;
  isbn: string;
  page_count: number;
  short_description: string;
  status: string;
  thumbnail_url: string;
  title: string;
}
