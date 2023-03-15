import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { GetMovieDetails } from 'services/GetApi';
import defaultImg from '../../defaultImg.jpg';
const URL = 'https://image.tmdb.org/t/p/w500';

export function MovieDetails() {
  const location = useLocation();

  const goBack = location.state?.from ?? '/movies';

  const [movie, setMovie] = useState([]);
  const { moviesId } = useParams();
  useEffect(() => {
    GetMovieDetails(moviesId)
      .then(response => setMovie(response.data))
      .catch(error => console.log(error));
  }, [moviesId]);
  const { title, popularity, overview, poster_path } = movie;

  return (
    <div>
      <Link to={goBack}>Go back </Link>
      <h1>{title}</h1>
      {poster_path ? (
        <img
          src={`${URL}${poster_path}`}
          alt={title}
          width="200px"
          height="200px"
        />
      ) : (
        <img src={defaultImg} alt="defaultImg" width="200px" height="200px" />
      )}
      <p>user popylarity: {popularity}</p>
      <p>description: {overview}</p>
      <ul>
        <li>
          <Link to="cast"> MovieCast</Link>
        </li>
        <li>
          <Link to="reviews">MovieReviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
