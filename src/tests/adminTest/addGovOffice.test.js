import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { AddOffice } from '../../components/pages/adminPages/add-govOffice.jsx';

describe('CandidatesPage component should', () => {
    const props = {
        CreateOffice: jest.fn(),
    };
    const wrapper = shallow(<AddOffice {...props} />);
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
