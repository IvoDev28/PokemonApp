import Image from "next/image";
import React from "react";

export const NoFavorite = () => {
  return (
    <section className="h-[calc(100vh-70px)] flex flex-col gap-y-10 items-center justify-center animate__animated animate__fadeIn">
      <h1 className="text-4xl font-bold">No hay favoritos</h1>
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        }
        width={250}
        height={250}
        className="opacity-10"
        alt="no hay favoritos"
      />
    </section>
  );
};
