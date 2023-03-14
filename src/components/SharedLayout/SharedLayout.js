import { Outlet } from 'react-router-dom';
import { StyledLink, Conteiner, Header, Nav } from './SharedLayout.styled';
export function SharedLayout() {
  return (
    <Conteiner>
      <Header>
        <Nav>
          <StyledLink to="/">home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </Conteiner>
  );
}
