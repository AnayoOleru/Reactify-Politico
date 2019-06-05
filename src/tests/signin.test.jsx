import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SignInStore, { SignIn } from '../components/pages/sign-in.jsx';
import {shallow, mount} from 'enzyme';


const props = {
    user: {
        email: '',
        password: '',
        loading: false
    },
    posts: {
        loading: false,
    },
    SigninAction: jest.fn(() => Promise.resolve())
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
    name: 'email', value: 'Anayo@oleru.com'
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);

const instance = () => mount(<SignIn {...props} />);

describe('Signin component', () => {
     it('render component', () => {
         const wrapper = shallow(<SignIn {...props}/>);
         const  signinState  = wrapper.instance().state.count;
     });
     it('change state when input is entered', () => {
        const wrapper = instance();
        const onChangeSpy = jest.spyOn(wrapper.instance(), 'onChange');
        wrapper.instance().onChange({
          target: user
        });
        expect(onChangeSpy).toHaveBeenCalledTimes(1);
     });
     it('should submit a form', () => {
        const e = {
          preventDefault: jest.fn()
        };
        const component = shallow(<SignIn {...props} />);
        const handleSubmitSpy = jest.spyOn(component.instance(), 'handleSubmit');
        component.instance().handleSubmit(e);
        expect(handleSubmitSpy).toHaveBeenCalledTimes(1);
     });
     it('has map state to props', () => {
        const component = shallow(<SignInStore {...props} store={store} />);
        expect(component.length).toBe(1);
      });
});
