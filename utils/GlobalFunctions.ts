import {
  PokemonEvolutionChainType,
  PokemonSpeciesDataInterface,
  PokemonDetails,
} from "../interfaces/PokemonInterfaces";

export const toFirstUppercase = (name: string) => name.charAt(0).toUpperCase() + name.slice(1);

export const getStringIDfromID = (id: number) => {
  if (id >= 10 && id < 100) return `0${id}`;
  if (id >= 100) return `${id}`;
  return `00${id}`;
};

export const getPokemonImage = (id: number) => {
  return `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${getStringIDfromID(id)}.png`;
};

export const shuffle = (array: any[]) => {
  let counter = array.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter -= 1;
    const temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
};

export const extractEvolutionChain = (response: PokemonEvolutionChainType) => {
  const evoChain = [];
  let evoData = response.chain;

  do {
    evoChain.push({
      name: evoData.species.name,
      url: evoData.species.url,
    });
    [evoData] = evoData.evolves_to;
  } while (evoData && Object.prototype.hasOwnProperty.call(evoData, "evolves_to"));

  return evoChain;
};

export const getFlavorSpeech = (pokemonSpeciesData: PokemonSpeciesDataInterface, pokemonData: PokemonDetails) => {
  const enLang = pokemonSpeciesData.flavor_text_entries.filter((entry) => entry.language.name === "en")[0];
  const types = pokemonData.types.join(" and ");
  const legend = pokemonSpeciesData.is_legendary ? " legendary, " : "";
  const mythic = pokemonSpeciesData.is_mythical ? " mythical, " : "";
  const text = `${pokemonData.name}, ${legend}${mythic}${types} type pokemon. ${enLang.flavor_text.replace(
    /\r?\n|\r/g,
    " ",
  )}`;
  return text;
};

export const getIDfromURL = (url: string) => {
  const tempURL = url.split("/");
  const id = +tempURL[tempURL.length - 2];
  if (id >= 10 && id < 100) return `0${id}`;
  if (id >= 100) return `${id}`;
  return `00${id}`;
};
