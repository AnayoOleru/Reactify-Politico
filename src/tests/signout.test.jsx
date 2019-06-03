import React from 'react';
import { Signout } from '../components/pages/signout-page.jsx';
import {shallow, mount} from 'enzyme';

describe('Signout component', () => {
     it('render component', () => {
         const wrapper = shallow(<Signout />);
     });
});
