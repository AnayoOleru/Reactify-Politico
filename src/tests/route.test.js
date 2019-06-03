import React from 'react';
import { shallow } from 'enzyme';
import Route from '../routes/Routes';



describe('Route Component', () => {
    it('should render the route component correctly', () => {
        const component = shallow(<Route />);
        expect(component).toMatchSnapshot();
    });
});
