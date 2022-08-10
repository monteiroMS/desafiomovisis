import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  width: 90%;

  h4 {
    margin-top: 10px;
    margin-bottom: 5px;
  }

  h5 {
    margin: 10px;
    margin-bottom: 5px;
  }

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
    margin-left: 10px;
  }

  input {
    border: 1px solid lightgray;
    border-radius: 5px;
    color: gray;
    font-size: 12px;
    width: 60%;
    padding: 5px;
    padding-left: 10px;
  }

  input:focus {
    outline: none;
  }

  button {
    border: 1px solid blue;
    border-radius: 5px;
    background-color: white;
    height: 25px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 95%;
  }

  button:hover {
    cursor: pointer;
  }

  button:disabled {
    display: none;
  }

  button:active {
    background-color: blue;
    color: white;
  }
`;
