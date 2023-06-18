import styled from "styled-components";

export const BtnStyles = styled.button`
  min-width: 150px;
  padding: 8px 16px;
  color: #a487d4;
  text-transform: uppercase;
  border-radius: 4px;
  border: solid 1px #5736a3;
  background-color: inherit;

  &:hover,
  &:focus {
    font-weight: 700;
    box-shadow: 0 0 3px 1px #5736a3;
    color: #6a45a7;
  }
`;
