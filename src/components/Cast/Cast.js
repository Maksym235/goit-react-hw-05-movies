import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetMovieCredits } from 'services/GetApi';
import person from '../../person.png';
const URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieCast() {
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
          const { name, character, id, profile_path } = item;
          return (
            <li key={id}>
              <h2>{name}</h2>
              {profile_path ? (
                <img
                  src={`${URL}${profile_path}`}
                  alt={name}
                  width="100px"
                  height="100px"
                />
              ) : (
                <img src={person} alt={name} width="100px" height="100px" />
              )}
              <p>character: {character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
