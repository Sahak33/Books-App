import NumberInput from "components/inputs/numberInput";
import "./Catalog.scss";
import { FC } from "react";
import { books } from "./data";
import Card from "components/card";
import DateInput from "components/inputs/dateInput";
import Select from "components/inputs/select";

const Catalog: FC = () => {
  return (
    <div className="catalog">
      <form className="catalog_searchbar">
        <div className="catalog_searchbar_fields">
          <NumberInput />
          <DateInput />
          <Select />
        </div>
        <div className="catalog_searchbar_buttons">
          <button>Filter</button>
          <button>Clear Filters</button>
        </div>
      </form>
      <div className="catalog_books">
        {books.map(({ title, published, authors, categories, thumbnailUrl, shortDescription }: any) => (
          <Card
            authors={authors}
            categories={categories}
            currency={published?.currency}
            key={title}
            price={published?.price}
            shortDescription={shortDescription}
            thumbnailUrl={thumbnailUrl}
            title={title}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
