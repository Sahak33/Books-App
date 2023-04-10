import { ChangeEvent, FC, useState } from "react";
import { ReactComponent as SearchIcon } from "assets/search.svg";
import { ReactComponent as CloseIcon } from "assets/close.svg";
import "./Search.scss";

const Search: FC = () => {
  const [search, setSearch] = useState<string>("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const handleClearSearch = () => setSearch("");

  return (
    <div className="search">
      <label htmlFor="search" className="search_icon">
        <SearchIcon className="icon" />
      </label>
      <input
        autoComplete="off"
        className="search_input"
        id="search"
        onChange={handleOnChange}
        placeholder="Search books..."
        type="text"
        value={search}
      />
      {search.length > 0 && <CloseIcon className="search_clear_icon" onClick={handleClearSearch} />}
    </div>
  );
};

export default Search;
