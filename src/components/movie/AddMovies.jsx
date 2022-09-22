/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../navbar/NavBar';
import Input from './Input';
import { fetchMovies } from '../../redux/reducers/moviesReducer';

const fetchAddMovie = async (movie) => {
  const sendMovie = {
    title: movie.Title,
    description: movie.Description,
    photo: movie.Photo,
    director: movie.Director,
    playing_time: movie['Playing Time'],
    release_date: movie['Release Date'],
    genre: movie.Genre,
    ticket_price: movie['Ticket Price'],
    country: movie.Country,
    lead_cast: movie['Lead Cast'],
  };

  try {
    const response = await axios.post(
      'http://localhost:3000/api/v1/movies/create',
      sendMovie,
    );
    return response;
  } catch (error) {
    return error;
  }
};

const defaultFormFields = {
  Title: '',
  Director: '',
  'Release Date': '',
  'Playing Time': '',
  Genre: '',
  'Ticket Price': '',
  'Lead Cast': '',
  Country: '',
  Photo: '',
  Description: '',
};

const AddMovies = () => {
  const [movie, setMovie] = useState({ ...defaultFormFields });
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesReducer.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const validateEntry = (event) => {
    const { name, value } = event.target;
    if (name !== 'Title') {
      return true;
    }
    const check = movies.filter((movieItem) => movieItem.title === value);
    if (check.length > 0) {
      setIsError(true);
    } else {
      setIsError(false);
    }
    return false;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
    validateEntry(event);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchAddMovie(movie);
    setMovie({ ...defaultFormFields });
  };

  return (

    <>
      <NavBar />
      <div className="w-full flex justify-center bg-gray-100 py-16">
        <div className="w-1/2 shadow-md border bg-white pb-12">
          <div className="py-3 px-8 border-b-2">
            <h1>Add Movie</h1>
          </div>
          <form
            className="grid grid-cols-1 md:grid-cols-2 px-10 mt-12 w-full gap-3"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 w-full">
              <label htmlFor="title" className="block mr-5">
                Title
              </label>
              <Input
                type="text"
                id="title"
                name="Title"
                value={movie.Title}
                onChange={handleChange}
                required
                className="py-2 px-3 border border-gray-300 w-full"
              />
              <h2 id="validAlert" className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded ${isError ? 'visible' : 'invisible'}`} role="alert">Movie Already Exist</h2>
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="director" className="block mr-5">
                Director
              </label>
              <Input
                type="text"
                id="director"
                name="Director"
                value={movie.Director}
                onChange={handleChange}
                required
                className="py-2 px-3 border border-gray-300 w-full"
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="release-date" className="block mr-5">
                Release Date
              </label>
              <Input
                type="date"
                id="release-date"
                name="Release Date"
                value={movie['Release Date']}
                onChange={handleChange}
                required
                className="py-2 px-3 border border-gray-300 w-full"
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="playing-time" className="block mr-5">
                Playing Time
              </label>
              <Input
                type="text"
                id="playing-time"
                name="Playing Time"
                value={movie['Playing Time']}
                onChange={handleChange}
                required
                className="py-2 px-3 border border-gray-300 w-full"
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="genre" className="block mr-5">
                Genre
              </label>
              <Input
                type="text"
                id="genre"
                name="Genre"
                value={movie.Genre}
                onChange={handleChange}
                required
                className="py-2 px-3 border border-gray-300 w-full"
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="ticket-price" className="block mr-5">
                Ticket Price
              </label>
              <Input
                type="text"
                id="ticket-price"
                name="Ticket Price"
                value={movie['Ticket Price']}
                onChange={handleChange}
                required
                className="py-2 px-3 border border-gray-300 w-full"
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="lead-cast" className="block mr-5">
                Lead Cast
              </label>
              <Input
                type="text"
                id="lead-cast"
                name="Lead Cast"
                value={movie['Lead Cast']}
                onChange={handleChange}
                required
                className="py-2 px-3 border border-gray-300 w-full"
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="country" className="block mr-5">
                Country
              </label>
              <Input
                type="text"
                id="country"
                name="Country"
                value={movie.Country}
                onChange={handleChange}
                required
                className="py-2 px-3 border border-gray-300 w-full"
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="photo" className="block mr-5">
                Photo
              </label>
              <Input
                type="text"
                id="photo"
                name="Photo"
                value={movie.Photo}
                onChange={handleChange}
                required
                className="py-2 px-3 border border-gray-300 w-full"
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="description" className="block mr-5">
                Description
              </label>
              <Input
                type="text"
                id="description"
                name="Description"
                value={movie.Description}
                onChange={handleChange}
                required
                className="py-2 px-3 border border-gray-300 w-full"
              />
            </div>

            <button
              type="submit"
              className="col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              disabled={isError}
            >
              Add Movie
            </button>

          </form>
        </div>
      </div>
    </>
  );
};
export default AddMovies;
