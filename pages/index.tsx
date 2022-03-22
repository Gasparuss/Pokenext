import type { GetStaticProps } from "next";
import { Layout } from "../components/Layout/Layout";
import { Pokedex } from "../components/Pokedex/Pokedex";
import { InferGetStaticPropsType } from "next";
import { fetchExploreList } from "../helpers/getPokemon";
import { PokemonDetails } from "../interfaces/PokemonInterfaces";

const Home = ({ pokemons }: InferGetStaticPropsType<PokemonDetails[]>) => {
  return (
    <Layout>
      <Pokedex pokemonsList={pokemons} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const list = await fetchExploreList();
  return {
    props: {
      pokemons: list,
    },
  };
};

export default Home;
