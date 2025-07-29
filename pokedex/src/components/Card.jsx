import React, { useState } from 'react';
import './Card.css';

const Card = ({ pokemon, onClick }) => {
  const [imgError, setImgError] = useState(false);
  const { name, id, spriteUrl } = pokemon;

  const imageSrc = !imgError ? spriteUrl : 'https://pokeapi.co/api/v2' + '/pokemon/other/official-artwork/4d/back/' + id + '.png';

  return (
    <div className="card-container" onClick={() => onClick && onClick(pokemon)}>
      <img
        src={imageSrc}
        alt={name}
        className="card-image"
        onError={(e) => {
          e.target.onerror = null;
          setImgError(true);
          console.warn(`Imagem não carregou para: ${name} (ID: ${id})`);
        }}
      />
      <div className="card-info">
        <h3 className="card-name">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
        <span className="card-number">#{id.toString().padStart(3, '0')}</span>
      </div>
    </div>
  );
};

export default Card;
