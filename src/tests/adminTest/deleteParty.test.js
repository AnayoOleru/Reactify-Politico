import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { DeleteParty } from '../../components/pages/adminPages/delete-party.jsx';

describe('DeleteParty component should', () => {
    const props = {
        deleteParty: jest.fn(),
    };
    const wrapper = shallow(<DeleteParty {...props} />);
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
