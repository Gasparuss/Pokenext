import { memo, useState } from "react";
import { PokemonList } from "../../interfaces/PokemonInterfaces";
import useRefineItems from "../../hooks/useRefineItems";
import { Card } from "../Card/Card";
import { Search } from "../Input/Search";
import { Sort } from "../Input/Sort";
import { FilterByType } from "../Input/FilterByType";
import styles from "./pokedex.module.scss";

type PokemonListProps = {
  pokemonsList: PokemonList[];
};

export const Pokedex = memo<PokemonListProps>(({ pokemonsList }) => {
  const { requestSearch, search, refinedItems, requestFilter, requestSort, sortKey, filterByType } =
    useRefineItems(pokemonsList);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    requestSearch(text);
  };

  const handleFilterByType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const text = event.target.value;
    requestFilter(text);
  };

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const text = event.target.value;
    if (text === "id") requestSort("id");
    else if (text === "name") requestSort("name");
    else requestSort(null);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Search handleSearch={handleSearch} searchValue={search} />
        <Sort handleSort={handleSort} sortValue={sortKey} />
        <FilterByType list={pokemonsList} handleFilterByType={handleFilterByType} filterValue={filterByType} />
      </div>
      {refinedItems && <Card pokemons={refinedItems} />}
    </>
  );
});

Pokedex.displayName = "PokemonsList";
