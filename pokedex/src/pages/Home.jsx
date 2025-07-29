import React, { useEffect, useState } from 'react';
import { fetchAllPokemon, fetchPokemonDetails } from '../pokedexService';
import Card from '../components/Card';
import './Home.css';

const Home = () => {
  const [pokemonList, setPokemonList] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);
      const allPokemon = await fetchAllPokemon(150);
      const detailedPokemon = await Promise.all(
        allPokemon.map(async (poke) => await fetchPokemonDetails(poke.url))
      );
      const filteredPokemon = detailedPokemon.filter(poke => poke !== null);
      setPokemonList(filteredPokemon);
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
