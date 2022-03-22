import { Layout } from "../../components/Layout/Layout";
import { PokemonPage } from "../../components/PokemonPage/PokemonPage/PokemonPage";
import { Seo } from "../../components/Seo";

const Pokemon = () => {
  return (
    <Layout>
      <Seo title="Pokemon" />
      <PokemonPage />
    </Layout>
  );
};

export default Pokemon;
