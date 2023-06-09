import NumberInput from "components/inputs/numberInput";
import { FC, useEffect, useState } from "react";
import Card from "components/card";
import DateInput from "components/inputs/dateInput";
import Select from "components/inputs/select";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "hooks/useAppDispatch";
import { fetchBooksThunk, fetchCategoriesThunk } from "store/slices/book/thunk";
import { useAppSelector } from "hooks/useAppSelector";
import { bookSelector } from "store/selectors/book";
import { IBook } from "store/types/book";
import { IFilterFields } from "types";
import Loading from "components/loading";
import Error from "components/error";
import "./Catalog.scss";

const Catalog: FC = () => {
  const dispatch = useAppDispatch();
  const { books, loading, error, categories } = useAppSelector(bookSelector);
  const [isValid, setIsValid] = useState(false);

  const { handleSubmit, register, reset, watch } = useForm<IFilterFields>({ mode: "onSubmit" });

  const handleClearFilter = () => {
    dispatch(fetchBooksThunk())
      .unwrap()
      .then(() => reset());
  };
  const handleOnSubmit: SubmitHandler<IFilterFields> = (data): void => {
    const params: IFilterFields = {};

    for (const key in data) {
      if (data[key]) {
        params[key] = data[key];
      }
    }

    dispatch(fetchBooksThunk(params));
  };

  useEffect(() => {
    const subscription = watch((values) => {
      if (values.price || values.date || values.category) {
        return setIsValid(true);
      }
      setIsValid(false);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

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
          <button
            disabled={!isValid}
            type="button"
            className={`clear_filter ${!isValid ? "disabled" : ""}`}
            onClick={handleClearFilter}
          >
            Clear Filters
          </button>
          <button type="submit" className="filter">
            Filter
          </button>
        </div>
      </form>
      <div className="catalog_books custom_scroll">
        {loading && <Loading />}
        {!loading && error && <Error error={error} />}
        {!loading &&
          !error &&
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
        {!loading && !error && !books.length && <p className="catalog_empty">Not Available...</p>}
      </div>
    </div>
  );
};

export default Catalog;
