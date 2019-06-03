import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ElectionResultStore, { Results } from '../src/components/pages/election-results.jsx';
import UserNavbar from '../src/components/reuseable component/user-navbar.component.jsx';


const props = {
  posts: {},
  getAllElectionResults: jest.fn(() => Promise.resolve()),
  candidates: [{
    candidate:'',
    result:'',
}],
match: {
  params: {
    officeId:1
  }
}
};

const initialState = {
  get: {
      success: true,
      candidates: {
          title: '',
          content: ''
      },
      error: ''
  },
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);

const instance = () => mount(<ElectionResultStore />);

const OfficeComponent = (
  <Provider store={store}>
    <Results {...props} />
  </Provider>
);

describe('Alloffice component', () => {
     it('render component', () => {
      const wrapper = shallow(<Results {...props} />);
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
    const component = shallow(<ElectionResultStore {...props} store={store} />);
    expect(component.length).toBe(1);
  });

});
