import Search from "components/search";
import "./Catalog.scss";
import { FC } from "react";
import { books } from "./data";
import Card from "components/card";

const Catalog: FC = () => {
  return (
    <div className="catalog">
      <div className="catalog_searchbar">
        <Search />
      </div>
      <div className="catalog_books">
        {books.map(({ title, published, authors, categories, thumbnailUrl, shortDescription }: any) => (
          <Card
            authors={authors}
            categories={categories}
            currency={published?.currency}
            key={thumbnailUrl}
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
