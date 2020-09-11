import React from 'react';
import styled from 'styled-components';

export const PokemonLI = ({ id, name, selected }) => {
  return (
    <>
      <PokemonWrapper>
        <SelectionBox hidden={selected}>{'>'}</SelectionBox>
        <PokemonID>{id}</PokemonID>
        <PokemonName>{name}</PokemonName>
      </PokemonWrapper>
    </>
  );
};

const PokemonWrapper = styled.p`
  transform: translate(0, -20px);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SelectionBox = styled.span`
  text-align: left;
  width: 1ch;
  margin: 0;
`;

const PokemonID = styled.span`
  text-align: right;
  width: 4ch;
  margin-right: 1ch;
`;

const PokemonName = styled.span`
  text-align: left;
  width: 100%;
  text-transform: capitalize;
`;

export default PokemonLI;
