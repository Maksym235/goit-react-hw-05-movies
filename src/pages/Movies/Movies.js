import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { GetMovieByName } from 'services/GetApi';
import Form from 'components/Form/Form';
import MoviesList from 'components/MoviesList/MoviesList';
export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('value');
  const location = useLocation();

  useEffect(() => {
    if (value === null) {
      return;
    }
    async function GetMovies() {
      await GetMovieByName(value)
        .then(resp => {
          setMovies(resp.data.results);
        })
        .catch(error => console.log(error));
    }
    GetMovies();
  }, [value]);

  const onSubmit = movieName => {
    setSearchParams({ value: movieName });
  };

  return (
    <div>
      <Form onSubmit={onSubmit} />
      <MoviesList movies={movies} location={location} />
    </div>
  );
}
