import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Alloffice } from '../src/components/pages/govOffice-page.jsx';
import UserNavbar from '../src/components/reuseable component/user-navbar.component.jsx';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

const OfficeComponent = (
  <Provider store={store}>
    <Alloffice />
  </Provider>
);

describe('Alloffice component', () => {
     it('render component', () => {
         const wrapper = shallow(<Alloffice />);
     });
});

describe('Office component', () => {
  it('should match snapshot', () => {
    const wrap = OfficeComponent;
    expect(wrap).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(OfficeComponent);
    expect(wrapper.find(<UserNavbar />));
  });

});
