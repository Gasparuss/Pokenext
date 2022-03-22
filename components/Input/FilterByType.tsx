import { memo } from "react";
import { FiFilter } from "react-icons/fi";
import { PokemonList } from "../../interfaces/PokemonInterfaces";
import styles from "../Pokedex/pokedex.module.scss";

interface FilterByTypeProps {
  list: PokemonList[];
  handleFilterByType: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  filterValue: string;
}

export const FilterByType = memo<FilterByTypeProps>(({ list, handleFilterByType, filterValue }) => {
  const flat = list.map((item) => item.types).flat();
  const arrUnique = Array.from(new Set(flat));

  return (
    <div className={styles.selectWrapper}>
      <FiFilter />
      <select name="filterByTypes" id="filterByTypes" onChange={handleFilterByType} value={filterValue}>
        <option value="">filter by type</option>
        {arrUnique.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

FilterByType.displayName = "FilterInput";
