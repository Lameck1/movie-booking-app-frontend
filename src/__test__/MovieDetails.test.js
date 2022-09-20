import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import MovieDetails from '../components/movie/MovieDetails';

describe('Render the missions list in profile page', () => {
  it('Renders the missions list in profile page correctly', () => {
    const movieDetails = TestRenderer.create(
      <Provider store={store}>
        <MovieDetails />
      </Provider>,
    ).toJSON();
    expect(movieDetails).toMatchSnapshot();
  });
});
