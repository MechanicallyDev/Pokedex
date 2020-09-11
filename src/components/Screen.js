import styled from 'styled-components';

const Screen = styled.div`
  flex: 1;
  margin: 10px auto;
  width: 90%;
  height: 90%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #628831 0%,
    #7e914a 75%,
    #8c9d47 100%
  );
  box-shadow: inset 2px 2px 8px #000000;
  border-radius: 18px;
  padding: 20px;
  color: #22222288;
  font-size: 1rem;
  line-height: 1.6rem;
  font-weight: 700;
  overflow: hidden;
  @media screen and (max-height: 780px) {
    .tela {
      font-size: 0.8rem;
      line-height: 1.2rem;
    }
  }
`;

export const PageCounter = styled.span`
  display: inline-block;
  width: 100%;
  text-align: right;
`;

export default Screen;
