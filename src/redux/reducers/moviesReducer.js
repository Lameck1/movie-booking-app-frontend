import axios from 'axios';

const FETCH_MOVIES = 'FETCH_MOVIES';

// App initial state
const initialState = {
  movies: [],
};

// Actions
// movies
export const movies = (payload) => ({
  type: FETCH_MOVIES,
  payload,
});

export const fetchMovies = () => async (dispatch) => {
  const res = await axios.get('http://localhost:3000/api/v1/movies');
  const newMovies = res.data.data.movies;
  dispatch(movies(newMovies));
};

// Reducer
const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { movies: [...action.payload] };
    default:
      return state;
  }
};

export default moviesReducer;
