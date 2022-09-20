import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import store from '../redux/store/store';
import NavBar from '../components/navbar/NavBar';

describe('Render the navbar', () => {
  it('Renders the navbar', () => {
    const navbar = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>,
    ).toJSON();
    expect(navbar).toMatchSnapshot();
  });
});
