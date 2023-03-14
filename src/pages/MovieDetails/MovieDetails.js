import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { GetMovieDetails } from 'services/GetApi';
import styled from 'styled-components';
export function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const { moviesId } = useParams();
  useEffect(() => {
    GetMovieDetails(moviesId)
      .then(response => setMovie(response.data))
      .catch(error => console.log(error));
  }, [moviesId]);
  const { title, popularity, overview } = movie;

  const Img = styled.div`
    display: block;
    width: 120px;
    height: 120px;
    background-color: orange;
  `;
  return (
    <div>
      <h1>{title}</h1>
      <Img></Img>
      {/* <img src={backdrop_patch} alt={title} /> */}
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
