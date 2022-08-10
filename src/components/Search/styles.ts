import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  width: 100%;
`;

export const InputContainer = styled.div`
  margin: 20px 0 0 20px;

  input {
    border: 1px solid lightgray;
    border-radius: 10px;
    color: gray;
    font-size: 16px;
    width: 400px;
    padding: 10px;
  }

  input:focus {
    outline: none;
  }
`;
