import styled from 'styled-components';

const Speaker = styled.div`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #0f0f0f 0%,
    #282828 68.75%,
    #ffffff 72.4%,
    #555555 76.04%,
    #474747 100%
  );
  border: 4px solid #be4545;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export default Speaker;
