import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import HomePage from '../src/components/pages/home-page.jsx';
import Navbar from '../src/components/reuseable component/navbar-component.jsx';
import Footer from '../src/components/reuseable component/footer-component.jsx';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

const HomePageComponent = (
  <Provider store={store}>
    <HomePage />
  </Provider>
);

describe('HomePage component', () => {
  it('should match snapshot', () => {
    const wrap = HomePageComponent;
    expect(wrap).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(HomePageComponent);
    expect(wrapper.find(<Navbar />));
  });

  it('should render without crashing', () => {
    const wrapper = shallow(HomePageComponent);
    expect(wrapper.find(<Footer />)); 
  });
});
