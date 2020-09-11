import styled from 'styled-components';

const Gameboy = styled.div`
  background-color: #dd4d4d;
  box-shadow: 10px 10px 0px #9e3838;
  width: 90vw;
  max-width: 600px;
  min-width: 360px;
  height: 80vh;
  max-height: 900px;
  min-height: 610px;
  margin: 10vh auto;
  border-radius: 2rem;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 4px solid rgba(255, 255, 255, 0.15);

  @media screen and (max-height: 900px) {
    margin: 0px auto;
    height: 95vh;
  }
`;

export default Gameboy;
