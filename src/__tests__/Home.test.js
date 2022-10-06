import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Home from '../pages/Home';
import store from '../redux/configureStore';

const HomePage = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

describe('renders properly the company details page', () => {
  it('renders correctly', () => {
    const component = renderer.create(<HomePage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
