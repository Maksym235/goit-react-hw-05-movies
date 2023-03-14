export function Movies() {
  return <div>Movies page</div>;
}

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { GetMovieByName } from 'services/GetApi';
// export function Movies() {
//   const [movieName, setMovieName] = useState('');
//   const [movies, setMovies] = useState([]);
//   const handlerChange = evt => {
//     setMovieName(evt.currentTarget.value);
//   };

//   const handlerSubmit = evt => {
//     evt.preventDefault();
//     setMovieName(evt.currentTarget.value);
//   };

//   GetMovieByName(movieName)
//     .then(response => setMovies(response.data.results))
//     .cath(error => console.log(error));
//   return (
//     <div>
//       <form>
//         <input
//           name="name"
//           placeholder="enter movie name"
//           onChange={handlerChange}
//         />
//         <button type="submit" onSubmit={handlerSubmit}></button>
//       </form>
//       <ul>
//         {movies.map(movie => {
//           const { title, id } = movie;
//           return (
//             <li key={id}>
//               <Link to={`${id}`}>{title}</Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
