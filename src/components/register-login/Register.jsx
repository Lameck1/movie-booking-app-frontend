import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signupAPI } from '../../redux/reducers/signUpReducer';

const Register = () => {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const signup = (e) => {
    e.preventDefault();
    dispatch(signupAPI(username));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center register-login">
      <div className="md:w-2/4 lg:w-1/4 h-96 bg-white shadow-xl rounded-md p-5">
        <h1 className="text-center font-semibold text-gray-900 uppercase">
          Register
        </h1>
        <form className="mt-16 md:px-10 px-4">
          <label htmlFor="username" className="block">
            <span className="mb-1 block font-semibold">Username</span>
            <input
              type="text"
              id="username"
              placeholder="Please enter username"
              className="w-full py-3 border px-3 focus:outline-gray-800"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <button
            onClick={signup}
            type="submit"
            className="bg-lime-500 text-lg py-2 mt-5 w-full text-white mb-3 border-4 hover:border-4 hover:border-gray-800 hover:bg-white hover:text-gray-900"
          >
            Register
          </button>
          <Link to="/" className="text-blue-600">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
