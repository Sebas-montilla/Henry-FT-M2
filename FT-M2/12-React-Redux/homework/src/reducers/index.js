import {
  GET_MOVIES,
  GET_MOVIE_DETAIL,
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIE_FAVORITE,
} from "../actions";

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: undefined,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_MOVIES:
      return { ...state, moviesLoaded: payload.Search }; //*search cus that's what the api return
    case GET_MOVIE_DETAIL:
      return { ...state, movieDetail: payload };
    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: [...state.moviesFavourites, payload],
      };
    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter(
          ({ imdbID }) => imdbID !== payload
        ),
      };
    default:
      return state;
  }
}
