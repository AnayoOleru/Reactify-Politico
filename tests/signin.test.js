import React from 'react';
import { SignIn } from '../src/components/pages/sign-in.jsx';
import {shallow, mount} from 'enzyme';

describe('Signin component', () => {
     it('render component', () => {
         const wrapper = shallow(<SignIn />);
         const  signupState  = wrapper.instance().state.count;
     });
});
