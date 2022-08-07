import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  h3, h1 {
    margin-left: 20px;
  }

  .product-cards-container {
    border: 1px solid black;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
