import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  .principal-container {
    flex-grow: 1;
    display: flex;
  }

  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;
