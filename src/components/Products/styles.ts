import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  h3, h1 {
    margin-left: 20px;
  }

  div {
    border: 1px solid black;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    // gap: 20px;
    justify-content: space-evenly;
  }
`;
