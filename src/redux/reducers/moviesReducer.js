import axios from 'axios';

const FETCH_MOVIES = 'FETCH_MOVIES';
const ADD_MOVIE = 'ADD_MOVIE';
const DELETE_MOVIE = 'DELETE_MOVIE';

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
export const addMovie = (payload) => ({
  type: ADD_MOVIE,
  payload,
});

export const deleteMovie = (payload) => ({
  type: DELETE_MOVIE,
  payload,
});

export const fetchMovies = () => async (dispatch) => {
  const res = await axios.get('https://moviebookingapi.herokuapp.com/api/v1/movies');
  const newMovies = res.data.data.movies;
  dispatch(movies(newMovies));
};

export const addMovies = async (movieData, dispatch) => {
  const sendMovie = {
    title: movieData.Title,
    description: movieData.Description,
    photo: movieData.Photo,
    director: movieData.Director,
    playing_time: movieData['Playing Time'],
    release_date: movieData['Release Date'],
    genre: movieData.Genre,
    ticket_price: movieData['Ticket Price'],
    country: movieData.Country,
    lead_cast: movieData['Lead Cast'],
  };
  const response = await axios.post(
    'https://moviebookingapi.herokuapp.com/api/v1/movies/create',
    sendMovie,
  );
  dispatch(addMovie(response.data.movie));
};

// Reducer
const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { movies: [...action.payload] };
    case ADD_MOVIE:
      return { movies: [...movies, action.payload] };
    case DELETE_MOVIE:
      return state.movies.filter((movie) => movie.id !== action.payload);
    default:
      return state;
  }
};

export default moviesReducer;
