import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Beep from '../utils/beep';
import Gameboy from '../components/Gameboy';
import Controller from '../components/Controller';
import Screen, { PageCounter } from '../components/Screen';
import PokemonLI from '../components/PokemonLI';

import './Global.css';

const Pokedex = () => {
  const [data, setData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);
  const [numPages, setNumPages] = useState(null);
  const [page, setPage] = useState(1);
  const [positionSelected, setPositionSelected] = useState(1);
  const [canMove, setCanMove] = useState(true);

  useEffect(() => {
    api.get('/pokedex/1').then(({ data }) => {
      setData(data.pokemon_entries);
      setNumPages(Math.ceil(data.pokemon_entries.length / 20));
    });
  }, []);

  useEffect(() => {
    if (selectedPokemon !== 0)
      api.get(`/pokemon/${selectedPokemon}`).then(({ data }) => {
        setPokemonData(data);
        setCanMove(false);
      });
  }, [selectedPokemon]);

  function handleNavigation(direction) {
    let freq = 880;
    if (canMove && direction === 'Next' && page < numPages) {
      setPage(page + 1);
    } else if (canMove && direction === 'Previous' && page > 1) {
      setPage(page - 1);
    } else if (canMove && direction === 'Up' && positionSelected > 1) {
      setPositionSelected(positionSelected - 1);
    } else if (canMove && direction === 'Down' && positionSelected < 20) {
      setPositionSelected(positionSelected + 1);
    } else if (canMove && direction === 'A') {
      freq = 1000;
      setSelectedPokemon((page - 1) * 20 + positionSelected);
    } else if (!canMove && direction === 'B') {
      setCanMove(true);
      setPokemonData([]);
      freq = 770;
    } else {
      freq = 440;
    }
    Beep(50, freq, 0.2, 'triangle');
  }

  return (
    <Gameboy>
      <Screen>
        {data && canMove && (
          <>
            <PageCounter>{`${page}/${numPages}`}</PageCounter>
            {data.slice((page - 1) * 20, page * 20).map((pokemon, index) => (
              <PokemonLI
                id={pokemon.entry_number}
                key={pokemon.entry_number}
                name={pokemon.pokemon_species.name}
                selected={positionSelected !== index + 1}
              />
            ))}
          </>
        )}
        {pokemonData && !canMove && (
          <div>
            <p>
              # {pokemonData.id}
              {' - '}
              <span
                style={{ textTransform: 'capitalize', display: 'inline-block' }}
              >
                {' '}
                {pokemonData.name}
              </span>
            </p>
            <span style={{ display: 'inline' }}>
              Type:
              <br />
              {pokemonData.types.map((type) => (
                <span
                  key={pokemonData.name + type.type.name}
                  style={{ textTransform: 'capitalize' }}
                >
                  {type.type.name}
                  <br />
                </span>
              ))}
            </span>
            <span style={{ display: 'inline' }}>
              Abilities:
              <br />
              {pokemonData.abilities.map((type) => (
                <span
                  key={pokemonData.name + type.ability.name}
                  style={{ textTransform: 'capitalize' }}
                >
                  {type.ability.name}
                  <br />
                </span>
              ))}
            </span>
            <img
              src={pokemonData.sprites.front_default}
              alt={pokemonData.name}
              style={{
                filter:
                  'grayscale(100%) opacity(25%) drop-shadow(8px 8px 10px green)',
                imageRendering: 'pixelated',
                transform: 'scale(0.01)',
                width: '100%',
                height: 'auto',
                transform: 'translate(0, -40px)',
                position: 'relative',
                top: '0px',
              }}
            />

            {console.log(pokemonData)}
          </div>
        )}
      </Screen>
      <Controller handleNavigation={handleNavigation} />
    </Gameboy>
  );
};

export default Pokedex;
