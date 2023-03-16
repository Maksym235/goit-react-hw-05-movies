import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useLottie } from 'lottie-react';
import loading from '../../36292-loader-movie.json';
import { StyledLink, Conteiner, Header, Nav } from './SharedLayout.styled';
export function SharedLayout() {
  const options = {
    animationData: loading,
    loop: true,
    style: {
      width: '200px',
      height: '200px,',
    },
  };

  const { View } = useLottie(options);

  return (
    <Conteiner>
      <Header>
        <Nav>
          <StyledLink to="/">home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<div>{View}</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Conteiner>
  );
}
