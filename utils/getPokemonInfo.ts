import { pokeAPi } from "@/api";
import { PokedexOne } from "@/interfaces";

export const getPokemonInfo = async (nameOrId: string) => {
  const { data } = await pokeAPi.get<PokedexOne>(`/pokemon/${nameOrId}`);
  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
