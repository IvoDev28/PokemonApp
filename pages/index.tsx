import Image from "next/image";
import { Inter } from "next/font/google";
import { NextPage } from "next";
import { Layout } from "@/components/layouts";
import { GetStaticProps } from "next";
import { pokeAPi } from "@/api";
import { PokemonsList, SmallPokemon } from "@/interfaces";
import { PokemonCard } from "@/components/pokemon/PokemonCard";
import "animate.css";
interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado pokemon">
      <section className="min-h-[calc(100vh-70px)] grid place-content-center gap-y-6 py-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4 sm:gap-4">
          {pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeAPi.get<PokemonsList>("/pokemon?limit=151");
  //console.log(data);
  const newdata: SmallPokemon[] = data.results.map((datapoke) => {
    const id_poke = datapoke.url.split("/")[datapoke.url.split("/").length - 2];
    return {
      ...datapoke,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id_poke}.svg`,
      id: id_poke,
    };
  });

  return {
    props: { pokemons: newdata },
  };
};

export default Home;
