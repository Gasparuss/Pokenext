import { memo } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "../Pokedex/pokedex.module.scss";

interface SearchProps {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}

export const Search = memo<SearchProps>(({ handleSearch, searchValue }) => {
  return (
    <div className={styles.selectWrapper}>
      <FaSearch />
      <input
        type="search"
        name="q"
        placeholder="Enter Pokemon Name..."
        autoComplete="off"
        onChange={handleSearch}
        value={searchValue}
      />
    </div>
  );
});

Search.displayName = "SearchInput";
