import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { GetMovieByName } from 'services/GetApi';
import { BsSearch } from 'react-icons/bs';

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

  const handlerSubmit = async evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    if (form.elements.movieName.value.trim() === '') {
      alert('please enter movie name');
      return;
    }
    setSearchParams({ value: form.elements.movieName.value });
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input name="movieName" placeholder="enter movie name" />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
      <ul>
        {movies &&
          movies.map(movie => {
            const { title, id } = movie;
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
