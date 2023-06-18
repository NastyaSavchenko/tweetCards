import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainSlyels = styled.main`
  min-height: calc(100vh - 64px);
  padding: 40px 20px;

  > h2 {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }
`;

export const NavSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  padding: 20px 40px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const LinkStyels = styled(Link)`
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
