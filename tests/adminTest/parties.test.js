import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Parties } from '../../src/components/pages/adminPages/parties.jsx';

describe('Parties component should', () => {
    const props = {
        getAllParties: jest.fn(),
    };
    const wrapper = shallow(<Parties {...props} />);
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
