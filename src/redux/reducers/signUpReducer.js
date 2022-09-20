import axios from 'axios';

const LOGIN = 'LOGIN';
const SIGNUP = 'SIGNUP';

// App initial state
const initialState = {
  user: [],
};

// Actions
// Login
export const login = (payload) => ({
  type: LOGIN,
  payload,
});

// Signup
export const signup = (payload) => ({
  type: SIGNUP,
  payload,
});

export const signupAPI = (username) => async (dispatch) => {
  let user;
  try {
    const fetchedUser = await axios.post(
      'http://localhost:3000/api/v1/register',
      {
        username,
      },
    );
    user = fetchedUser.data.user;
  } catch (error) {
    user = error.response.data.user;
  }
  dispatch(signup(user));
};

export const loginAPI = (username) => async (dispatch) => {
  let user;
  try {
    const fetchedUser = await axios.post('http://localhost:3000/api/v1/login', {
      username,
    });
    user = fetchedUser.data.user;
  } catch (error) {
    user = error.response.data.user;
  }
  dispatch(login(user));
};

// Reducer
const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, user: action.payload };
    case LOGIN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default signUpReducer;
