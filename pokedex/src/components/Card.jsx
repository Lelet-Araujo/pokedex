import React from 'react';
import './Card.css';

const Card = ({ pokemon, onClick }) => {
  const { name, id } = pokemon;

  // Puxando a imagem pelo número da Pokédex, direto da URL oficial
 const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="card-container" onClick={() => onClick(pokemon)}>
      <img
        src={imageSrc}
        alt={name}
        className="card-image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.style.display = 'none';
        }}
      />
      <div className="card-info">
        <h3 className="card-name">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
        <span className="card-number">#{id}</span>
      </div>
    </div>
  );
};

export default Card;
