import React from 'react';
import { Parties } from '../src/components/pages/party-page.jsx';
import {shallow, mount} from 'enzyme';

describe('Parties component', () => {
     it('render component', () => {
         const wrapper = shallow(<Parties />);
         const  signupState  = wrapper.instance().state.count;
     });
});
