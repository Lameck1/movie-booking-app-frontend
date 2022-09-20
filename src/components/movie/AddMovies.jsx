import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import NavBar from '../navbar/NavBar';
import Input from './Input';

const AddMovies = () => {
  const data = ['Title', 'Director', 'Release Date', 'Playing Time', 'Genre', 'Ticket Price', 'Lead cast', 'Country', 'Photo'];

  return (

    <>
      <NavBar />
      <div className="w-full flex justify-center bg-gray-100 py-16">
        <div className="w-1/2 shadow-md border bg-white pb-12">
          <div className="py-3 px-8 border-b-2">
            <h1>Add Movie</h1>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 px-10 mt-12 w-full">

            {data.map((data) => (
              <div className="mb-4 w-full" key={uuidv4()}>
                <label htmlFor="title" className="block mr-5">
                  <span className="block mb-1">{data}</span>
                  <Input
                    type="text"
                    id="title"
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
