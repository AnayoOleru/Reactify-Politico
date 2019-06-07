import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { AllUsers } from '../../components/pages/adminPages/register-candidate.jsx';

describe('Register component should', () => {
    const props = {
        getAllParties: jest.fn(),
        getAllOffice: jest.fn(),
        getAllUsers: jest.fn(),
        getAUser: jest.fn(),
        RegisterUserAsCandidate: jest.fn(),
        getAllInterestedUsers: jest.fn(),
        users: [{id:''}, {firstname:''}],
        parties: [{id:''}],
        offices: [{id:''}, {name:''}]
    };
    const wrapper = shallow(<AllUsers {...props} />);
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
