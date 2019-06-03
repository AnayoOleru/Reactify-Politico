import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Navbar from '../../components/reuseable component/navbar-component.jsx';

describe('Navbar component should', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('header').length).toBe(1);
    expect(wrapper.find('nav').length).toBe(1);
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('a').length).toBe(6);
    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find('li').length).toBe(2);
    expect(wrapper.find('h1').length).toBe(2);
    expect(wrapper.find('p').length).toBe(1);
  });
});
