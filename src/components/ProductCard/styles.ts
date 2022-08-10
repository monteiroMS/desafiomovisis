import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid lightgray;
  box-shadow: 5px 5px 4px #888888;
  width: 170px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h4 {
    margin-bottom: 0;
  }

  img {
    width: 100%;
    border-radius: 10px;
  }

  button {
    border: 2px solid green;
    border-radius: 5px;
    background-color: green;
    color: white;
    font-weight: 700;
    padding: 10px;
    font-size: 12px;
    justify-self: center;
  }

  button:hover {
    cursor: pointer;
  }

  button:active {
    background-color: white;
    color: green;
  }
`;
