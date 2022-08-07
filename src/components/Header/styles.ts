import styled from 'styled-components';

export const Container = styled.header`
  background-color: blue;
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
`;