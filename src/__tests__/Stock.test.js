import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Stock from '../components/Stock';
import store from '../redux/configureStore';

const CompanyProvider = () => (
  <Provider store={store}>
    <Stock />
  </Provider>
);

describe('renders the company stock data', () => {
  it('renders properly', () => {
    const component = renderer.create(<CompanyProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
