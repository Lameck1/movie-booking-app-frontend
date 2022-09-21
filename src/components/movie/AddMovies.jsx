import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import NavBar from '../navbar/NavBar';
import Input from './Input';

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

  await axios
    .post('http://localhost:3000/api/v1/movies/create', sendMovie)
    .then((res) => {
      console.log('res:', res);
    })
    .catch((err) => {
      console.log('err:', err);
    });
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
  const [movie, setMovie] = useState(defaultFormFields);

  const data = ['Title', 'Director', 'Release Date', 'Playing Time', 'Genre', 'Ticket Price', 'Lead Cast', 'Country', 'Photo'];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchAddMovie(movie);
    setMovie(defaultFormFields);
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
            className="grid grid-cols-1 md:grid-cols-2 px-10 mt-12 w-full"
            onSubmit={handleSubmit}
          >
            {data.map((data) => (
              <div className="mb-4 w-full" key={uuidv4()}>
                <label htmlFor={data} className="block mr-5">
                  <span className="block mb-1">{data}</span>
                  <Input
                    type="text"
                    id={data}
                    name={data}
                    value={movie[data]}
                    onChange={handleChange}
                    required
                    className="py-2 px-3 border border-gray-300 w-full"
                  />
                </label>
              </div>
            ))}
            <div className="flex mb-4">
              <label htmlFor="description" className="block w-full">
                <span className="block mb-1">Description</span>
                <textarea
                  type="file"
                  id="description"
                  name="Description"
                  value={movie.Description}
                  onChange={handleChange}
                  className="py-2 px-3 border border-gray-300 w-full"
                />
              </label>
            </div>
            <hr />
            <div className="mt-3 flex justify-end">
              <button
                type="submit"
                className="mt-5 py-3 px-16 bg-lime-500 hover:bg-lime-800 text-white"
              >
                Save Movie
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddMovies;
