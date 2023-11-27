export interface PokemonsList {
  count: number;
  next: string;
  previous?: string;
  results: SmallPokemon[];
}

export interface SmallPokemon {
  name: string;
  url: string;
  id: string;
  img: string;
}

export interface PokemonFavorite {
  id: number;
  name_pokemon: string;
  url_image: string;
}
