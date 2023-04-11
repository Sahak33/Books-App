import NumberInput from "components/inputs/numberInput";
import { FC, useEffect } from "react";
import Card from "components/card";
import DateInput from "components/inputs/dateInput";
import Select from "components/inputs/select";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "hooks/useAppDispatch";
import { fetchBooksThunk, fetchCategoriesThunk } from "store/slices/book/thunk";
import { useAppSelector } from "hooks/useAppSelector";
import { bookSelector } from "store/selectors/book";
import { IBook } from "store/types/book";
import { GET_BOOKS } from "urls/book";
import "./Catalog.scss";

const Catalog: FC = () => {
  const dispatch = useAppDispatch();
  const { books, loading, error, categories } = useAppSelector(bookSelector);

  const { handleSubmit, register } = useForm({ mode: "onSubmit" });

  const handleOnSubmit = (data: any) => {
    console.log(GET_BOOKS(data), "data");
    dispatch(fetchBooksThunk(data));
  };

  useEffect(() => {
    dispatch(fetchBooksThunk());
    dispatch(fetchCategoriesThunk());
  }, []);

  return (
    <div className="catalog">
      <form className="catalog_searchbar" onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="catalog_searchbar_fields">
          <NumberInput register={register("price")} />
          <DateInput register={register("date")} /> 
          <Select register={register("category")} options={categories} />
        </div>
        <div className="catalog_searchbar_buttons">
          <button>Filter</button>
          <button>Clear Filters</button>
        </div>
      </form>
      <div className="catalog_books">
        {loading && <p>Loading ...</p>}
        {!loading && error && <p>{error}</p>}
        {!loading &&
          books &&
          books?.map(({ title, published, authors, categories, thumbnail_url, short_description, id }: IBook) => (
            <Card
              authors={authors}
              categories={categories}
              currency={published?.currency}
              id={id}
              key={id}
              price={published?.price}
              shortDescription={short_description}
              thumbnailUrl={thumbnail_url}
              title={title}
            />
          ))}
      </div>
    </div>
  );
};

export default Catalog;
