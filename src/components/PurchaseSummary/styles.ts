import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
  padding: 10px 30px 30px;
  height: min-content;

  .complete-purchase {
    border: none;
    border-radius: 10px;
    background-color: #22eb00;
    color: white;
    font-size: 16px;
    font-weight: 700;
    margin-top: 10px;
    padding: 15px 35px;
  }

  .complete-purchase:hover {
    cursor: pointer;
  }
`;

export const SummaryText = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px 0;
  align-items: center;
  width: 200px;

  p {
    margin: 0;
  }
`;

export const TotalContainer = styled.div`
  border-top: 1px solid gray;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  h4 {
    margin: 0;
    margin-top: 30px;
    margin-left: 10px;
  }

  p {
    color: darkgreen;
    font-weight: 700;
    margin-top: 0;
    padding-right: 10px;
    align-self: end;
  }
`;
