import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 100vh;
`;

export const Title = styled.h1`
  margin-left: 30px;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Main = styled.main`
  align-self: center;
  background-color: #ffffe0;
  border: 1px solid lightgray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
