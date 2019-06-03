import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AllOfficeStore, { Alloffice } from '../src/components/pages/govOffice-page.jsx';
import UserNavbar from '../src/components/reuseable component/user-navbar.component.jsx';


const props = {
  items: {
},
  getAllOffice: jest.fn(() => Promise.resolve())
};

const initialState = {
  get: {
      success: true,
      items:{
      data: {
          title: '',
          content: ''
      },
    },
      error: ''
  },
}

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);

const instance = () => mount(<Alloffice />);

const OfficeComponent = (
  <Provider store={store}>
    <Alloffice {...props} />
  </Provider>
);

describe('Alloffice component', () => {
     it('render component', () => {
      const wrapper = shallow(<Alloffice {...props} />);
      expect(wrapper).toMatchSnapshot();
     });
});

describe('Office component', () => {
  it('should match snapshot', () => {
    const wrap = OfficeComponent;
    expect(wrap).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(OfficeComponent);
    expect(wrapper.find(<UserNavbar {...props} />));
  });

  it('has map state to props', () => {
    const component = shallow(<AllOfficeStore {...props} store={store} />);
    expect(component.length).toBe(1);
  });

});
