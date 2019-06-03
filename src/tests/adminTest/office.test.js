import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Office } from '../../components/pages/adminPages/office.jsx'

describe('Office component should', () => {
    const props = {
        CreateOffice: jest.fn(),
        getAllOffice: jest.fn(),
    };
    const wrapper = shallow(<Office {...props} />);
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
