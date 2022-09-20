import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAPI } from '../../redux/reducers/signUpReducer';

const Login = () => {
  const [username, setUsername] = useState();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelector((state) => state.signUpReducer.user);

  const login = (e) => {
    e.preventDefault();
    dispatch(loginAPI(username));
    if (user) {
      navigate('/home');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center register-login">
      <div className="md:w-2/4 lg:w-1/4 mx-5 h-96 bg-white shadow-xl rounded-md p-5">
        <h1 className="text-center font-semibold text-gray-900 uppercase">
          Login
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
            onClick={login}
            type="submit"
            className="bg-lime-500 text-lg py-2 mt-5 w-full text-white mb-3 border-4 hover:border-4 hover:border-gray-800 hover:bg-white hover:text-gray-900"
          >
            Log in
          </button>
          <Link to="/register" className="text-blue-600">
            Register
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
