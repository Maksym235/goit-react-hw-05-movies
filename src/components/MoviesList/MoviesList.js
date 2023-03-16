import { Link } from 'react-router-dom';

export default function MoviesList({ movies, location }) {
  return (
    <ul>
      {movies &&
        movies.map(movie => {
          const { title, id } = movie;
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
