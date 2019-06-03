import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Notfound from '../src/components/pages/404-page.jsx';

describe('Footer component should', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notfound />);
    expect(wrapper.find('div').length).toBe(4);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);
  });
});
