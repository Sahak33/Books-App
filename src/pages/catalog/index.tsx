import Search from "components/search";
import "./Catalog.scss";

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="catalog_searchbar">
        <Search />
      </div>
      Catalog Page
    </div>
  );
};

export default Catalog;
