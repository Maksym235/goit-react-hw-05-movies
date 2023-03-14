import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetMovieReviews } from 'services/GetApi';
export function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();
  useEffect(() => {
    GetMovieReviews(moviesId).then(response =>
      setReviews(response.data.results)
    );
  }, [moviesId]);
  return (
    <div>
      <ul>
        {reviews.map(item => {
          const { author, content, id } = item;
          return (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}