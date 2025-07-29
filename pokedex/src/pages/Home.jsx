// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { fetchAllPokemon, fetchPokemonDetails } from '../pokedexService';
import Card from '../components/Card';
import './Home.css';

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);
      const allPokemon = await fetchAllPokemon(50); // Para começar, carregamos 50
      // Busca detalhes de cada Pokémon para ter imagem e id
      const detailedPokemon = await Promise.all(
        allPokemon.map(async (poke) => {
          const details = await fetchPokemonDetails(poke.url);
          return details;
        })
      );
      setPokemonList(detailedPokemon);
      setLoading(false);
    };

    loadPokemon();
  }, []);

  return (
    <div className="home-container">
      {loading ? (
        <p>Carregando Pokémon...</p>
      ) : (
        <div className="grid-container">
          {pokemonList.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
