/* eslint-disable eqeqeq */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from '../navbar/NavBar';

const MovieDetails = () => {
  const params = useParams();
  const movies = useSelector((state) => state.moviesReducer.movies);

  const movie = movies.find((item) => item.id == params.id);

  return (
    <>
      <NavBar />
      <div className="container mx-auto py-24 pl-24 pr-6 md:px-32 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mr-10 w-full">
          <img src={movie.photo} alt="Movie poster" className="shadow-lg" />
        </div>
        <div className=" bg-white shadow-lg relative pb-5 w-full">
          <div className="bg-gray-900 py-2">
            <h2 className="text-lg text-white text-center">Movie details</h2>
          </div>
          <div className="px-6">
            <div className="mb-3 mt-5 flex justify-between items-center">
              <span className="text-gray-600 font-semibold">{movie.title}</span>
            </div>
            <div className="mb-3 mt-5 flex justify-between items-center">
              <span className="text-gray-500">Launch date:</span>
              <span className="text-gray-600">{movie.release_date}</span>
            </div>
            <div className="mb-3 mt-5 flex justify-between items-center">
              <span className="text-gray-500">Ticket price:</span>
              <span className="text-gray-600">{movie.ticket_price}</span>
            </div>
            <div className="mb-3 mt-5 flex justify-between items-center">
              <span className="text-gray-500">Country:</span>
              <span className="text-gray-600">{movie.country}</span>
            </div>
            <div className="mb-3 mt-5 flex justify-between items-center">
              <span className="text-gray-500">Playing Time:</span>
              <span className="text-gray-600">{movie.playing_time}</span>
            </div>
            <div className="mb-3 my-5">
              <span className="text-gray-500 block font-semibold mb-2">
                Description:
              </span>
              <span className="mb-8 block text-gray-400">
                {movie.description}
              </span>
            </div>
          </div>
          <button
            type="button"
            className="absolute bottom-0 mb-2 right-0 mt-4 mr-5 bg-lime-500 px-12 py-2 text-lg text-white hover:bg-gray-800"
          >
            Reserve
          </button>
          <button
            type="button"
            className="absolute bottom-0 mb-2 left-0 mt-4 ml-5 bg-red-500 px-12 py-2 text-lg text-white hover:bg-gray-800"
          >
            Delete Movie
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
