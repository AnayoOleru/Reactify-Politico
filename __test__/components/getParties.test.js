import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import GetParties from '../../src/components/pages/party-page.jsx';

describe('Get parties component', () => {
  it('should match snapshot', () => {
    const wrap = GetParties;
    expect(wrap).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(GetParties);
    expect(wrapper.find(<div />));
    expect(wrapper.find(<ul />));
  });
});
