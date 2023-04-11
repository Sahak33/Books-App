export interface IInitialBook {
  book: any;
  books: any;
  categories: { id: number; name: string }[];
  error: string | undefined;
  loading: boolean;
}

export interface IBook {
  authors: string[];
  categories: string[];
  id: number;
  isbn: string;
  long_description: string;
  page_count: number;
  published: {
    date: string;
    price: number;
    currency: string;
  };
  short_description: string;
  status: string;
  thumbnail_url: string;
  title: string;
}
