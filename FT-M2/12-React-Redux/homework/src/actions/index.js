export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";

const API_KEY = "eb07853f";

export function getMovies(titulo) {
  return async function (dispatch) {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`
    );
    const payload = await response.json();
    dispatch({ type: "GET_MOVIES", payload });
  };
}
//*same thing but the one above is async-------
// export function getMovies(titulo) {
//   return function (dispatch) {
//     return fetch (`http://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`)
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({ type: "GET_MOVIES", payload: json });
//       });
//   };
// }
//*-------

export function getMovieDetail(id) {
  return async function (dispatch) {
    if (id) {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
      );
      const payload = await response.json();
      dispatch({ type: GET_MOVIE_DETAIL, payload });
    } else {
      dispatch({type: GET_MOVIE_DETAIL})
    }
  };
}

export function addMovieFavorite(movie) {
  return {
    type: ADD_MOVIE_FAVORITE,
    payload: movie,
  };
}

export function removeMovieFavorite(id) {
  return {
    type: REMOVE_MOVIE_FAVORITE,
    payload: id,
  };
}
