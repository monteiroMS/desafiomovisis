import styled from 'styled-components';

export const Container = styled.div`
  button {
    margin: 0;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    height: 100%;
  }

  button:hover {
    background-color: blue;
    cursor: pointer;
  }
`;
