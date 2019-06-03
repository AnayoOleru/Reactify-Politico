import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Register } from '../../src/components/pages/adminPages/register-candidate.jsx';

describe('Register component should', () => {
    const props = {
        getAllParties: jest.fn(),
        getAllOffice: jest.fn(),
        getAllUsers: jest.fn(),
        getAUser: jest.fn(),
        RegisterUserAsCandidate: jest.fn(),
        users: [{id:''}, {firstname:''}],
        parties: [{id:''}],
        offices: [{id:''}, {name:''}]
    };
    const wrapper = shallow(<Register {...props} />);
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
