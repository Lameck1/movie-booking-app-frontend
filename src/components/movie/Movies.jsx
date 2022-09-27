/* eslint-disable array-callback-return */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NavBar from '../navbar/NavBar';
import Movie from './Movie';
import { fetchMovies } from '../../redux/reducers/moviesReducer';

const Movies = () => {
  const movies = useSelector((state) => state.moviesReducer.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [movies]);

  return (
    <>
      <NavBar />
      <div className="container mx-auto ml-40 grid grid-cols-1 md:grid-cols-3 gap-4 py-24 pl-20 md:pl-32 pr-4">
        {movies
          && movies.map((movie) => (<Movie key={movie.id} movie={movie} />))}
      </div>
    </>
  );
};

export default Movies;
