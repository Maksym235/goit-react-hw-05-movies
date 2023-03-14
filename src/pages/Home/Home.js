import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GetTrending from 'services/GetApi';

export function Home() {
  const [movies, setMovies] = useState([]);

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
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
