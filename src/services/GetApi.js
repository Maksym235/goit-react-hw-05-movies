// https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>

'https://api.themoviedb.org/3/trending/movie/day?api_key=113ea569a968f3da036aa784decd0f0d';
import axios from 'axios';
// const KEY = '113ea569a968f3da036aa784decd0f0d';

export default function GetTrending() {
  return axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=113ea569a968f3da036aa784decd0f0d'
  );
}

export function GetMovieByName(name) {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=113ea569a968f3da036aa784decd0f0d&query=${name}`
  );
}

export function GetMovieDetails(movieId) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=113ea569a968f3da036aa784decd0f0d`
  );
}

export function GetMovieCredits(movieId) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=113ea569a968f3da036aa784decd0f0d`
  );
}

export function GetMovieReviews(movieId) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=113ea569a968f3da036aa784decd0f0d`
  );
}
