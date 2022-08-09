import styled from 'styled-components';

export const Container = styled.header`
  background-color: #1919e6;
  color: white;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    margin: 5px;
  }
  
  img {
    height: 30px;
    filter: invert(100%);
  }

  .button-cart {
    margin: 0;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    height: 100%;
  }

  .button-cart:hover {
    background-color: blue;
    cursor: pointer;
  }
`;

export const CounterContainer = styled.div`
  margin: 0;
  border-radius: 100%;
  color: white;
  text-align: center;
  font-weight: 700;
  background-color: orange;
  width: 15px;
  heigth: 15px;
  align-self: start;
`;
