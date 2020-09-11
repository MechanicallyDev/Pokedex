import React, { useEffect } from 'react';
import styled from 'styled-components';

import Beep from '../utils/beep';
import useKeyPress from '../hooks/useKeyPress';

import Speaker from './Speaker';
import { DirectionalButton, ActionButton } from './Button';

export const Controller = ({ handleNavigation }) => {
  const upPress = useKeyPress('w');
  const downPress = useKeyPress('s');
  const rightPress = useKeyPress('d');
  const leftPress = useKeyPress('a');
  const APress = useKeyPress('e');
  const BPress = useKeyPress('r');

  useEffect(() => {
    if (upPress) {
      document.getElementById('upbtn').click();
    }
    if (downPress) {
      document.getElementById('downbtn').click();
    }
    if (rightPress) {
      document.getElementById('rightbtn').click();
    }
    if (leftPress) {
      document.getElementById('leftbtn').click();
    }
    if (APress) {
      document.getElementById('Abtn').click();
    }
    if (BPress) {
      document.getElementById('Bbtn').click();
    }
  }, [rightPress, leftPress, upPress, downPress, APress, BPress]);

  return (
    <ControllerWrapper>
      <DirectionalButtonsWrapper>
        <DirectionalButton
          id="upbtn"
          onClick={() => {
            handleNavigation('Up');
          }}
        >
          /\
        </DirectionalButton>
        <div>
          <DirectionalButton
            id="leftbtn"
            onClick={() => {
              handleNavigation('Previous');
            }}
          >
            {'<'}
          </DirectionalButton>
          <DirectionalButton style={{ visibility: 'hidden' }} />
          <DirectionalButton
            id="rightbtn"
            onClick={() => {
              handleNavigation('Next');
            }}
          >
            {'>'}
          </DirectionalButton>
        </div>
        <DirectionalButton
          id="downbtn"
          onClick={() => {
            handleNavigation('Down');
          }}
        >
          \/
        </DirectionalButton>
      </DirectionalButtonsWrapper>
      <SpeakerWrapper>
        <Speaker />
        <p>
          Pokédex by <br />
          MechanicallyDev
        </p>
      </SpeakerWrapper>

      <ActionButtonsWrapper>
        <ActionButton
          id="Abtn"
          onClick={() => {
            handleNavigation('A');
          }}
          backgroundColor="#562B9C"
          boxShadow="3px 3px 0px #422178"
        >
          A
        </ActionButton>
        <ActionButton
          id="Bbtn"
          onClick={() => {
            handleNavigation('B');
          }}
          backgroundColor="#2435D0"
          boxShadow="3px 3px 0px #151F79"
        >
          B
        </ActionButton>
      </ActionButtonsWrapper>
    </ControllerWrapper>
  );
};

const ControllerWrapper = styled.div`
  margin: 10px 0 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const SpeakerWrapper = styled.div`
  margin: 10px 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  p {
    margin: 0;
    text-align: center;
    font-size: 0.6rem;
    line-height: 1.2rem;
    font-weight: 700;
    color: #ffffffaa;
    text-shadow: 0px 0px 4px #ff000099;
    transform: translate(0, 10px);
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
`;

const DirectionalButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ActionButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export default Controller;
