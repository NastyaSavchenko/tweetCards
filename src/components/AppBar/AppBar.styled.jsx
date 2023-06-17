import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  box-shadow: 0 0 13px 3px #5736a3;

  > nav {
    display: flex;
  }
`;

export const NavLinkStyles = styled(NavLink)`
  padding: 8px 16px;
  margin-right: 15px;
  border-radius: 4px;
  text-decoration: none;
  color: #a487d4;
  font-weight: 700;

  &:hover,
  &:focus {
    color: #6a45a7;
  }

  &.active {
    box-shadow: 0 0 3px 1px #5736a3;
    color: #6a45a7;
  }
`;
