import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PartiesStore, { Parties } from '../src/components/pages/party-page.jsx';
import {shallow, mount} from 'enzyme';


const props = {
    getAllParties: jest.fn(() => Promise.resolve())
};

const initialState = {
    get: {
        success: true,
        items:{
        data: {
            title: '',
            content: ''
        },
    },
        error: ''
    },
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);

const instance = () => mount(<Parties {...props} />);

describe('Parties component', () => {
     it('render component', () => {
         const wrapper = shallow(<Parties {...props} />);
     });
     it('has map state to props', () => {
        const component = shallow(<PartiesStore {...props} store={store} />);
        expect(component.length).toBe(1);
      });
});
