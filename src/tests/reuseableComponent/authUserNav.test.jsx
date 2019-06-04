import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import AuthUserNavbar from '../../components/reuseable component/auth-user-navbar.component.jsx';

describe('AuthUserNavbar component should', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<AuthUserNavbar />);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('a').length).toBe(7);
  });
});
