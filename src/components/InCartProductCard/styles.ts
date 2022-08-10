import styled from 'styled-components';

export const ProductCard = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 5px 5px 4px #888888;
  display: flex;
  margin: 15px;
  padding: 10px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  p {
    margin: 0;
  }

  .quantity-buttons {
    border: none;
    border-radius: 5px;
    background-color: #1919e6;
    color: white;
    font-weight: 700;
    padding: 5px;
    width: 25px;
  }

  .quantity-buttons:hover  {
    cursor: pointer;
  }

  .remove-button {
    display: flex;
    justify-content: center;
    border: none;
    border-radius: 5px;
    background-color: #b22222;
    padding: 5px;
    width: 30px;

    img {
      filter: invert(100%);
    }
  }

  .remove-button:hover {
    cursor: pointer;
  }
`;
