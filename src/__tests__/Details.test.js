import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import CompanyDetails from '../components/Details';
import store from '../redux/configureStore';

const DetailsProvider = () => (
  <Provider store={store}>
    <CompanyDetails />
  </Provider>
);

describe('renders properly the company details page', () => {
  it('renders correctly', () => {
    const component = renderer.create(<DetailsProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
