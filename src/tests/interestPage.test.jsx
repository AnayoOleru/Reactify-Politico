import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import InterestPageStore, { Interest } from '../components/pages/interest-page.jsx';
import {shallow, mount} from 'enzyme';


const props = {
    interest: {
        userName: '',
        officeName: '',
        loading: false,
        users: ''
    },
    posts: {
        loading: false,
        users:''
    },
    state: {
        get: {
            users: '',
        }
    },
    get: {
       state: {
           users: ''
       }
    },
    getAllParties: jest.fn(() => Promise.resolve()),

    parties: [
        { id: 1 , party: 'party', name: 'partyname' },
    ],

    offices: [
        { id: 1 , name: 'party' },
    ],
    getAllOffice: jest.fn(() => Promise.resolve()),
    UserIndicateInterest: jest.fn(() => Promise.resolve()),
};


const initialState = {
    posts: {
        success: true,
        data: {
            title: '',
            content: ''
        },
        error: '',
        get:{
            users: ''
        },
        state: {
            get: {
                users: '',
            }
        },
    },
}


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);


describe('Signin component', () => {

});
