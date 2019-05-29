import React from 'react';
import { SignUp } from '../src/components/pages/sign-up';
import {shallow, mount} from 'enzyme';

describe('Signup component', () => {
     it('render component', () => {
         const wrapper = shallow(<SignUp />);
         const  signupState  = wrapper.instance().state.count;
     });
});
