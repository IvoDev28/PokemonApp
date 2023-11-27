// En MiComponente.js
import Image from "next/image";
import React from "react";
import NextLink from "next/link";

function Navbar() {
  return (
    <div className="bg-white/10 flex justify-between select-none">
      <div className="flex justify-center items-center relative">
        <Image
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          }
          width={70}
          height={70}
          alt="nav_img"
        />
        <NextLink
          href="/"
          className="text-2xl font-bold absolute left-[3.4rem]"
        >
          P<span className="text-[1.2rem] font-normal">okemon</span>
        </NextLink>
      </div>
      <NextLink
        href="/favorites"
        className="flex justify-center items-center mr-4 cursor-pointer"
      >
        <h2>Favorites</h2>
      </NextLink>
    </div>
  );
}

export default Navbar; // Asegúrate de exportar el componente así
