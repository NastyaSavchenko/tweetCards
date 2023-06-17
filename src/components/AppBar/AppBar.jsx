import { Header, NavLinkStyles } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header>
      <nav>
        <NavLinkStyles to="/">Home</NavLinkStyles>
        <NavLinkStyles to="tweets">Tweets</NavLinkStyles>
      </nav>
    </Header>
  );
};
