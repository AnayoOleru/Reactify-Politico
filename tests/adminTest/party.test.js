import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Party } from '../../src/components/pages/adminPages/Parties.jsx';
import AdminNavbar from '../../src/components/reuseable component/admin-navbar.component.jsx';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

const OfficeComponent = (
  <Provider store={store}>
    <Party />
  </Provider>
);

describe('All Party component', () => {
     it('render component', () => {
         const wrapper = shallow(<Party />);
     });
});

describe('Party component', () => {
  it('should match snapshot', () => {
    const wrap = OfficeComponent;
    expect(wrap).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(OfficeComponent);
    expect(wrapper.find(<Party />));
  });

  it('should render without crashing', () => {
    const wrapper = shallow(OfficeComponent);
    expect(wrapper.find(<AdminNavbar />));
  });
});
