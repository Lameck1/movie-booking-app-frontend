import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navbar/NavBar';

const LandingPage = () => (
  <div className="landing-hero">
    <NavBar />
    <div className="container mx-auto px-32 flex justify-center items-baseline">
      <div className="w-3/5 md:w-7/12 h-64 bg-lime-800 absolute bottom-0 ml-12 rounded-tr-full rounded-tl-full flex justify-center">
        <div className="md:w-8/12 py-10">
          <h1 className="text-center text-sm md:text-3xl text-white">
            Doctor Strange
          </h1>
          <h2 className="text-center text-sm md:text-lg text-white">In The</h2>
          <h2 className="text-center text-sm md:text-2xl text-white">
            Multiverse of Madness
          </h2>
          <div className="flex justify-center">
            <Link
              to="/movies"
              className="my-6 py-4 md:px-24 px-3 bg-white border uppercase text-gray-900 font-semibold hover:border-white hover:bg-gray-900 hover:text-white"
            >
              Browse More Movies
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
