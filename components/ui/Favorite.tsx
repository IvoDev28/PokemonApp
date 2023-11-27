import { PokemonFavorite } from "@/interfaces";
import Image from "next/image";
import React, { FC } from "react";

export const Favorite: FC<PokemonFavorite> = ({
  id,
  name_pokemon,
  url_image,
}) => {
  //console.log(id);
  return (
    <section className="flex flex-col items-center justify-start">
      <p>{id}</p>
      <p>{name_pokemon}</p>
      <Image
        src={`${url_image}`}
        width={250}
        height={250}
        className="w-[15rem] h-[15rem]"
        alt="no hay favoritos"
      />
      {/* <h1 className="text-4xl font-bold">No hay favoritos</h1>
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        }
        width={250}
        height={250}
        className="opacity-10"
        alt="no hay favoritos"
      /> */}
    </section>
  );
};
