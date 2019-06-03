import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Footer from '../../src/components/reuseable component/footer-component.jsx';

describe('Footer component should', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('div').length).toBe(3);
    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find('li').length).toBe(3);
    expect(wrapper.find('p').length).toBe(1);
  });
});
