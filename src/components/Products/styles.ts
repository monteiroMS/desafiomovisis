import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  height: 100%;

  h3, h2 {
    margin-left: 20px;
    margin-top: 30px;
  }

  .product-cards-container {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
