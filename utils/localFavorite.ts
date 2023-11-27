import { PokemonFavorite } from "@/interfaces";

const toggleFavorite = (
  id: number,
  name_pokemon: string,
  url_image: string
) => {
  console.log("toogleFavorito llamado");
  let favorites: PokemonFavorite[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  if (favorites.some((favor) => favor.id === id)) {
    favorites = favorites.filter((pokeId) => pokeId.id !== id);
  } else {
    favorites.push({ id, name_pokemon, url_image });
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorite = (id: number): boolean => {
  if (typeof window === "undefined") return false;
  const favorites: PokemonFavorite[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return favorites.some((favor) => favor.id === id);
};

const pokemons = (): PokemonFavorite[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};
export default { toggleFavorite, existInFavorite, pokemons };
