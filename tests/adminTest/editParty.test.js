import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { EditParty } from '../../src/components/pages/adminPages/edit-party.jsx';

describe('EditParty component should', () => {
    const props = {
        editParty: jest.fn(),
    };
    const wrapper = shallow(<EditParty {...props} />);
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
