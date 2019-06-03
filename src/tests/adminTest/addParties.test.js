import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import {  AddParty } from '../../components/pages/adminPages/add-parties.jsx';

describe('AddParties component should', () => {
    const props = {
        CreateParty: jest.fn(),
    };
    const wrapper = shallow(<AddParty {...props} />);
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
