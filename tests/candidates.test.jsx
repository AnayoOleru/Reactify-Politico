import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Candidates } from '../src/components/pages/candidates-page.jsx';

describe('CandidatesPage component should', () => {
    const props = {
        getAllCandidates: jest.fn(),
        UserVote: jest.fn(),
        getCandidates: jest.fn(),
    }
    const wrapper = shallow(<Candidates {...props} />);
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
