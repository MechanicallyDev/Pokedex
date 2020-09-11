import styled from 'styled-components';

export const DirectionalButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 6px;
  margin: 2px;
  text-align: center;
  border-radius: 20%;
  background-color: #23a;
  box-shadow: 3px 3px 0px #151f79;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  -webkit-transition: 0.1s ease-in-out;
  -moz-transition: 0.1s ease-in-out;
  -o-transition: 0.1s ease-in-out;
  transition: 0.1s ease-in-out;
  :focus {
    outline: none;
  }
  :hover {
    transform: translate(1px, 1px);
  }
  :active {
    background: #aaa;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }
`;

export const ActionButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 10px 0 0;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  -webkit-transition: 0.1s ease-in-out;
  -moz-transition: 0.1s ease-in-out;
  -o-transition: 0.1s ease-in-out;
  transition: 0.1s ease-in-out;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: ${(props) => props.boxShadow};
  :focus {
    outline: none;
  }
  :hover {
    transform: translate(1px, 1px);
  }
  :active {
    background: #aaa;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }
`;
