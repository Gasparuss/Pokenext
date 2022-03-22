import { memo } from "react";
import { FaSort } from "react-icons/fa";
import { SortKey } from "../../hooks/useRefineItems";
import styles from "../Pokedex/pokedex.module.scss";

interface FilterByTypeProps {
  handleSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  sortValue: SortKey | null;
}

export const Sort = memo<FilterByTypeProps>(({ handleSort, sortValue }) => {
  return (
    <div className={styles.selectWrapper}>
      <FaSort />
      <select name="sort-pokemons" id="sort-pokemons" onChange={handleSort} value={sortValue || "shuffle"}>
        <option value="id">sort by ID</option>
        <option value="name">sort by name</option>
        <option value="shuffle">shuffle</option>
      </select>
    </div>
  );
});

Sort.displayName = "SortInput";
