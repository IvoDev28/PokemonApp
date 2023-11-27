import { pokeAPi } from "@/api";
import { Layout } from "@/components/layouts";
import { PokedexOne, PokemonFavorite, PokemonsList } from "@/interfaces";
import { localFavorite } from "@/utils";
import { GetStaticProps, NextPage } from "next";

import { GetStaticPaths } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import confetti from "canvas-confetti";
import { getPokemonInfo } from "@/utils/getPokemonInfo";

interface Props {
  pokemon: PokedexOne;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  //console.log(pokemon.id);
  console.log(pokemon);
  const [isInFavorite, setIsInFavorite] = useState(
    localFavorite.existInFavorite(pokemon.id)
  );
  //console.log(pokemon);
  const router = useRouter();
  //console.log(router.query);
  const onToggleFavorite = () => {
    localFavorite.toggleFavorite(
      pokemon.id,
      pokemon.name,
      pokemon.sprites.other?.dream_world.front_default || ""
    );
    setIsInFavorite(!isInFavorite);
    if (!isInFavorite) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: { x: 1, y: 0 },
      });
    }
  };
  return (
    <Layout title={pokemon.name}>
      <section className="flex flex-col md:h-screen full md:flex-row md:gap-x-10 md:justify-center md:items-start justify-start items-center gap-y-5 py-8 px-3 animate__animated animate__fadeInLeft">
        <div className="w-[15rem] h-[15rem] min-[320px]:w-[17rem] min-[320px]:h-[17rem] md:w-[20rem]  md:h-[20rem] flex justify-center items-center bg-white/20 rounded-[.6rem]">
          <Image
            src={pokemon.sprites.other?.dream_world.front_default || ""}
            width="100"
            height="100"
            className="w-[14rem] h-[14rem] "
            alt="test"
          />
        </div>
        <div className="w-[15rem] min-[320px]:w-[17rem] md:w-[40rem] h-auto md:h-[20rem] flex flex-col justify-center items-center bg-white/20 rounded-[.6rem] p-2">
          <div className="w-full flex flex-col md:flex-row md:justify-around justify-center items-center my-3 gap-y-3">
            <div className="basis-[50%] flex md:justify-start md:pl-3 items-center">
              <h2 className=" uppercase font-bold text-3xl md:text-[2.2rem] text-end">
                {pokemon.name}
              </h2>
            </div>
            <div className="basis-[50%] flex justify-center md:justify-end items-center md:pr-3">
              {isInFavorite ? (
                <button
                  className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-[.5rem] w-[100%] md:w-[70%] min-w-[200px]"
                  onClick={onToggleFavorite}
                >
                  Eliminar de favoritos
                </button>
              ) : (
                <button
                  className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-[.5rem] w-[100%] md:w-[70%] min-w-[200px]"
                  onClick={onToggleFavorite}
                >
                  Guardar en favoritos
                </button>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center my-3 gap-y-3">
            <div className="w-full flex justify-center items-center md:justify-start md:pl-3 ">
              <h2 className="text-2xl">Sprites :</h2>
            </div>
            <div className="flex w-full  md:h-[128px] flex-col md:flex-row justify-center items-center px-2">
              <Image
                src={pokemon.sprites.back_default || ""}
                width="100"
                height="100"
                className="w-[7rem] h-[7rem] min-[800px]:w-[8rem] min-[800px]:h-[8rem]"
                alt="test"
              />
              <Image
                src={pokemon.sprites.front_default || ""}
                width="100"
                height="100"
                className="w-[7rem] h-[7rem] min-[800px]:w-[8rem] min-[800px]:h-[8rem]"
                alt="test"
              />
              <Image
                src={pokemon.sprites.front_shiny || ""}
                width="100"
                height="100"
                className="w-[7rem] h-[7rem] min-[800px]:w-[8rem] min-[800px]:h-[8rem]"
                alt="test"
              />
              <Image
                src={pokemon.sprites.back_shiny || ""}
                width="100"
                height="100"
                className="w-[7rem] h-[7rem] min-[800px]:w-[8rem] min-[800px]:h-[8rem]"
                alt="test"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  //console.log(ctx.params);
  const { name } = ctx.params as { name: string };
  /* const { data } = await pokeAPi.get<PokedexOne>(`/pokemon/${name}`);
  //console.log(data);

  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  }; */

  return {
    props: { pokemon: await getPokemonInfo(name) },
  };
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  /*   const { data } = await  // your fetch function here
   */
  const { data } = await pokeAPi.get<PokemonsList>("/pokemon?limit=151");

  const pokemonNames: string[] = data.results.map((pokemon) => pokemon.name);
  //console.log(pokemon151);
  return {
    paths: pokemonNames.map((name) => ({ params: { name } })),
    fallback: false,
  };
};
export default PokemonByNamePage;
