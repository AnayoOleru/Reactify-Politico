import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SignUpStore, { SignUp } from '../src/components/pages/sign-up.jsx';
import {shallow, mount} from 'enzyme';

const props = {
    user: {
        firstname: '',
        lastname: '',
        othername: '',
        email: '',
        phoneNumber: '',
        loading: false
    },
    posts: {
        loading: false,
    },
    SignupAction: jest.fn(() => Promise.resolve())
};

const initialState = {
    posts: {
        success: true,
        data: {
            title: '',
            content: ''
        },
        error: ''
    },
}

const user = {
    name: 'firstname', value: 'Anayo'
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);

const instance = () => mount(<SignUp {...props} />);

describe('Signup component', () => {
     it('render component', () => {
         const wrapper = shallow(<SignUp {...props}/>);
         const  signupState  = wrapper.instance().state.count;
     });
     it('change state when input is entered', () => {
        const wrapper = instance();
        const onChangeSpy = jest.spyOn(wrapper.instance(), 'onChange');
        wrapper.setState({    user: {
            firstname: 'hdh',
            lastname: 'd',
            othername: 'dd',
            email: 'ddd',
            phoneNumber: 'ddd'
        },});
        wrapper.instance().onChange({
          target: user
        });
        expect(onChangeSpy).toHaveBeenCalledTimes(1);
     });
     it('should submit a form', () => {
        const e = {
          preventDefault: jest.fn()
        };
        const component = shallow(<SignUp {...props} />);
        const handleSubmitSpy = jest.spyOn(component.instance(), 'handleSubmit');
        component.instance().handleSubmit(e);
        expect(handleSubmitSpy).toHaveBeenCalledTimes(1);
     });
     it('has map state to props', () => {
        const component = shallow(<SignUpStore {...props} store={store} />);
        expect(component.length).toBe(1);
      });
});
