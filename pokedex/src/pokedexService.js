import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export async function fetchAllPokemon(limit = 150) {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon?limit=${limit}`);
    return response.data.results; // array de { name, url }
  } catch (error) {
    console.error('Erro ao buscar Pokémon:', error);
    return [];
  }
}

export async function fetchPokemonDetails(url) {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return {
      id: data.id,
      name: data.name,
      spriteUrl: data.sprites.front_default, // sprite frontal da API
    };
  } catch (error) {
    console.error('Erro ao buscar detalhes do Pokémon:', error);
    return null;
  }
}
