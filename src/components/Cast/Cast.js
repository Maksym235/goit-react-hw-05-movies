import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetMovieCredits } from 'services/GetApi';
export function MovieCast() {
  const [cast, setCast] = useState([]);
  const { moviesId } = useParams();
  useEffect(() => {
    GetMovieCredits(moviesId)
      .then(response => setCast(response.data.cast))
      .catch(error => console.log(error));
  }, [moviesId]);

  return (
    <div>
      <ul>
        {cast.map(item => {
          const { name, character, id } = item;
          return (
            <li key={id}>
              <h2>{name}</h2>
              <p>character: {character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
