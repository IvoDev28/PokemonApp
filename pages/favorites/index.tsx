import { pokeAPi } from "@/api";
import { Layout } from "@/components/layouts";
import { PokemonCard } from "@/components/pokemon/PokemonCard";
import { Favorite } from "@/components/ui/Favorite";
import { NoFavorite } from "@/components/ui/NoFavorite";
import { PokedexOne, PokemonFavorite } from "@/interfaces";
import { localFavorite } from "@/utils";
import { GetStaticProps, NextPage } from "next";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const FavoritesPage: NextPage = () => {
  const router = useRouter();
  //console.log(router.query);

  const [favoritePokemon, setFavoritePokemon] = useState<PokemonFavorite[]>([]);

  useEffect(() => {
    setFavoritePokemon(localFavorite.pokemons);
  }, []);

  return (
    <Layout title="Pokemons-Favoritos">
      {favoritePokemon.length === 0 ? (
        <NoFavorite />
      ) : (
        <section className="min-h-[calc(100vh-70px)] flex justify-center items-start gap-y-6 py-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4 sm:gap-4">
            {favoritePokemon.map((pokemon) => (
              <PokemonCard pokemonFavorite={pokemon} key={pokemon.id} />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default FavoritesPage;
