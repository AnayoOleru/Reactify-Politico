import expect from 'expect';
import reducer from '../../reducers/postReducer';
import * as types from '../../actions/types';

describe('New post reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                items: [],
                item: {},
                success: false,
                loading: false,
            }
        );
    });

    it('should handle FETCH_POSTS', () => {
        expect(reducer({}, {
            type: types.FETCH_POSTS,
        })).toEqual(
            {
                items: undefined
            }
        );
    });

    it('should handle NEW_POST', () => {
        expect(reducer({}, {
            type: types.NEW_POST,
        })).toEqual(
            {item: undefined,
            success:true
        }
        );
    });

    it('should handle NEW_PARTY_SUCCESS', () => {
        expect(reducer({}, {
            type: types.NEW_PARTY_SUCCESS,
            loading: false
        })).toEqual(
            {
                loading: false,
                newParty: undefined
            }
        );
    });

    it('should handle NEW_OFFICE_SUCCESS', () => {
        expect(reducer({}, {
            type: types.NEW_OFFICE_SUCCESS,
        })).toEqual(
            {
                newOffice: undefined
            }
        );
    });

    it('should handle NEW_OFFICE_FAILURE', () => {
        expect(reducer({}, {
            type: types.NEW_OFFICE_FAILURE,
            error: ''
        })).toEqual(
            {}
        );
    });

    it('should handle NEW_VOTE_SUCCESS', () => {
        expect(reducer({}, {
            type: types.NEW_VOTE_SUCCESS,
        })).toEqual(
            {
                item: undefined
            }
        );
    });

    it('should handle NEW_VOTE_FAILURE', () => {
        expect(reducer({}, {
            type: types.NEW_VOTE_FAILURE,
            error: ''
        })).toEqual(
            {}
        );
    });

    it('should handle NEW_CANDIDATE_SUCCESS', () => {
        expect(reducer({}, {
            type: types.NEW_CANDIDATE_SUCCESS,
        })).toEqual(
            {
                candidate: undefined
            }
        );
    });

    it('should handle NEW_CANDIDATE_FAILURE', () => {
        expect(reducer({}, {
            type: types.NEW_CANDIDATE_FAILURE,
            error: ''
        })).toEqual(
            {}
        );
    });

    it('should handle NEW_SIGNUP_LOADING', () => {
        expect(reducer({}, {
            type: types.NEW_SIGNUP_LOADING,
        })).toEqual(
            {
                loading: true,
            }
        );
    });

    it('should handle NEW_SIGNUP_SUCCESS', () => {
        expect(reducer({}, {
            type: types.NEW_SIGNUP_SUCCESS,
        })).toEqual(
            {
                signup: undefined,
                success: true,
                loading: false,
                candidate: undefined,
            }
        );
    });

    it('should handle NEW_SIGNUP_FAILURE', () => {
        expect(reducer({}, {
            type: types.NEW_SIGNUP_FAILURE,
        })).toEqual(
            {loading: false}
        );
    });

    it('should handle NEW_SIGNIN_LOADING', () => {
        expect(reducer({}, {
            type: types.NEW_SIGNIN_LOADING,
        })).toEqual(
            { loading: true }
        );
    });

    it('should handle NEW_SIGNIN_SUCCESS', () => {
        expect(reducer({}, {
            type: types.NEW_SIGNIN_SUCCESS,
        })).toEqual(
            {
                signin: undefined,
                success: true,
                loading: false
            }
        );
    });

    it('should handle NEW_SIGNIN_FAILURE', () => {
        expect(reducer({}, {
            type: types.NEW_SIGNIN_FAILURE,
        })).toEqual(
            {
                error: undefined,
                loading: false
            }
        );
    });
});
