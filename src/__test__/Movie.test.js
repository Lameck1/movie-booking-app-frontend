import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import Movie from '../components/movie/Movie';

describe('Render the movie lists', () => {
  it('Renders the movie correctly', () => {
    const movie = {
      id: 3,
      title: 'Captain America and Winter Soldier',
      director: 'Fidge',
      description: 'As Steve Rogers adapts to the complexities of a contemporary world,',
      playing_time: '2hr',
      photo: 'https://tvline.com/wp-content/uploads/2021/04/captain-america-and-winter-soldier-renewal.png?w=620',
      release_date: '06-20-2022',
      genre: 'Action',
      ticket_price: 200.0,
      country: 'United States',
      lead_cast: 'Amkam',
    };
    const movies = TestRenderer.create(
      <Provider store={store}>
        <Movie key={movie.id} movies={movie} />
      </Provider>,
    ).toJSON();
    expect(movies).toMatchSnapshot();
  });
});
