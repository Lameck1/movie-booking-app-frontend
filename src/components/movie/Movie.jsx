/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from 'react-icons/ti';

const Movie = ({ movie }) => (
  <div className="overflow-hidden pb-10 shadow-lg mx-4">
    <div className="h-56 text-center z-[-10] flex justify-center items-center relative w-full">
      <Link to={`/movies/${movie.id}`} className="font-semibold">
        <img src={movie.photo} alt="Movie poster" />
      </Link>
      <button
        type="button"
        className="py-3 px-5 rounded-full bg-white absolute bottom-0 right-0 shadow-xl -mb-6 mr-4 text-lg hover:bg-gray-900 hover:text-white hover:border border text-gray-900 cursor-pointer"
      >
        Reserve
      </button>
    </div>
    <div className="mt-10 text-center">
      <Link to={`/movies/${movie.id}`} className="font-semibold">
        {movie.title}
      </Link>
    </div>
    <p className="mt-10 text-center text-sm text-gray-400">
      {movie.description}
    </p>
    <div className="mt-5 flex justify-center items-center">
      <ul className="flex items-center">
        <li className="w-8 h-8 border border-gray-300 rounded-full flex justify-center items-center">
          <TiSocialFacebook className="text-lg" />
        </li>
        <li className="w-8 h-8 border border-gray-300 rounded-full flex justify-center items-center mx-4">
          <TiSocialTwitter className="text-lg" />
        </li>
        <li className="w-8 h-8 border border-gray-300 rounded-full flex justify-center items-center">
          <TiSocialInstagram className="text-lg" />
        </li>
      </ul>
    </div>
  </div>
);

export default Movie;
