import { PokemonFavorite, SmallPokemon } from "@/interfaces";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  pokemon?: SmallPokemon;
  pokemonFavorite?: PokemonFavorite;
}

export const PokemonCard: FC<Props> = ({ pokemon, pokemonFavorite }) => {
  const router = useRouter();
  const onclickCard = () => {
    router.push(`/name/${pokemon?.name || pokemonFavorite?.name_pokemon}`);
  };
  return (
    <div
      className="bg-white/20 w-[14rem] h-[14rem] flex flex-col justify-around items-center rounded-[.6rem] cursor-pointer select-none animate__animated animate__fadeIn"
      onClick={onclickCard}
    >
      <Image
        src={pokemon?.img || pokemonFavorite?.url_image || ""}
        width={100}
        height={100}
        className="w-[9rem] h-[9rem]"
        alt="pokemon"
      />
      <div className="flex w-full justify-around">
        <h2>{pokemon?.name || pokemonFavorite?.name_pokemon}</h2>
        <h2>{`#${pokemon?.id || pokemonFavorite?.id}`}</h2>
      </div>
    </div>
  );
};
