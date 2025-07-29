// src/pokedexService.js
import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export async function fetchAllPokemon(limit = 1025) {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon?limit=${limit=150}`);
    return response.data.results; // lista de { name, url }
  } catch (error) {
    console.error('Erro ao buscar Pokémon:', error);
    return [];
  }
}

export async function fetchPokemonDetails(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar detalhes do Pokémon:', error);
    return null;
  }
}


// /pokemon?limit=${limit}`);