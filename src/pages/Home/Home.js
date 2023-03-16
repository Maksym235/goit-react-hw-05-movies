import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GetTrending from 'services/GetApi';
import MoviesList from 'components/MoviesList/MoviesList';
export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = () => {
    GetTrending()
      .then(response => setMovies(response.data.results))
      .catch(error => console.log(error));
  };
  return (
    <div>
      <h1>Trending movies today</h1>
      <MoviesList movies={movies} location={location} />
    </div>
  );
}
