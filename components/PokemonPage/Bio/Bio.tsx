import { memo } from "react";
import { PokemonDetails, PokemonSpeciesDataInterface } from "../../../interfaces/PokemonInterfaces";
import { getFlavorSpeech, toFirstUppercase } from "../../../utils/GlobalFunctions";
import { FlexBetween } from "../../FlexBetween/FlexBetween";
import styles from "./bio.module.scss";

interface BioProps {
  pokemonData: PokemonDetails;
  pokemonSpeciesData: PokemonSpeciesDataInterface;
}

export const Bio = memo<BioProps>(({ pokemonData, pokemonSpeciesData }) => {
  return (
    <div className={styles.bio}>
      <pre className={styles.flavor}>{toFirstUppercase(getFlavorSpeech(pokemonSpeciesData, pokemonData))}</pre>
      <div className={styles.text}>
        <FlexBetween
          category="Genus"
          details={<p>{pokemonSpeciesData?.genera.filter((entry) => entry.language.name === "en")[0].genus}</p>}
        />
        <FlexBetween
          category="Height"
          details={
            <p>
              {pokemonData.height / 10}m{" "}
              <span>
                ({Math.floor(((pokemonData.height / 10) * 39.37) / 12)}&apos;
                {(((pokemonData.height / 10) * 39.37) % 12).toFixed(1)}&quot;)
              </span>
            </p>
          }
        />
        <FlexBetween
          category="Weight"
          details={
            <p>
              {pokemonData.weight / 10}kg <span>({((pokemonData.weight / 10) * 2.2).toFixed(1)} lbs)</span>
            </p>
          }
        />
        <FlexBetween
          category="Abilities:"
          details={
            <div className="flex flex-col items-start">
              {pokemonData.abilities.map((ability) => (
                <p key={ability.ability.name}>
                  {ability.ability.name
                    .split("-")
                    .map((txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
                    .join(" ")}{" "}
                  <span>{ability.is_hidden && "(Hidden Ability)"}</span>
                </p>
              ))}
            </div>
          }
        />
      </div>
    </div>
  );
});

Bio.displayName = "Bio";
