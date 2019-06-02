import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { EditParty } from '../../src/components/pages/adminPages/edit-party.jsx';
import AdminNavbar from '../../src/components/reuseable component/admin-navbar.component.jsx';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

const OfficeComponent = (
  <Provider store={store}>
    <EditParty />
  </Provider>
);

describe('Alloffice component', () => {
     it('render component', () => {
         const wrapper = shallow(<EditParty />);
     });
});

describe('Office component', () => {
  it('should match snapshot', () => {
    const wrap = OfficeComponent;
    expect(wrap).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(OfficeComponent);
    expect(wrapper.findWhere(<EditParty />));
  });

  it('should render without crashing', () => {
    const wrapper = shallow(OfficeComponent);
    expect(wrapper.findWhere(<AdminNavbar />));
  });
});
