import { useAppDispatch, useAppSelector } from "../../../store/reduxHooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getEvolutionData, getPokemonData, getPokemonSpeciesData } from "../../../store/pokemonSlice";
import Image from "next/image";
import styles from "./pokemonpage.module.scss";
import { toFirstUppercase, getPokemonImage } from "../../../utils/GlobalFunctions";
import { Evoltuion } from "../Evolution/Evolution";
import { Bio } from "../Bio/Bio";

export const PokemonPage = () => {
  const { pokemonData, pokemonSpeciesData } = useAppSelector((state) => state.pokemon);
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getPokemonSpeciesData(+id));
      dispatch(getPokemonData(+id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (pokemonSpeciesData) {
      dispatch(getEvolutionData(pokemonSpeciesData.evolution_chain.url));
    }
  }, [pokemonSpeciesData, dispatch]);

  return (
    <div>
      <button className={styles.button} type="button" onClick={() => router.back()}>
        BACK
      </button>
      <div className={styles.container}>
        {pokemonData && (
          <>
            <div className={styles.wrapper}>
              <div className={styles.img}>
                <Image src={getPokemonImage(pokemonData.id)} height={300} width={300} alt={pokemonData.name} />
              </div>
              {pokemonSpeciesData && pokemonData && (
                <Bio pokemonData={pokemonData} pokemonSpeciesData={pokemonSpeciesData} />
              )}
            </div>
            <Evoltuion />
          </>
        )}
      </div>
    </div>
  );
};
