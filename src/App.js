import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Movies from './components/movie/Movies';
import AddMovies from './components/movie/AddMovies';
import MovieDetails from './components/movie/MovieDetails';
import Login from './components/register-login/Login';
import Register from './components/register-login/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/create" element={<AddMovies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
