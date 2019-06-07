import expect from 'expect';
import reducer from '../../reducers/getReducer';
import * as types from '../../actions/types';

describe('Get post reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                parties: [],
                users: [],
                candidates: [],
                interest: [],
                offices: [],
                reducers: [],
                items: [],
                item: {},
                loading: false,
            }
        );
    });

    it('should handle FETCH_USER', () => {
        expect(reducer({}, {
            type: types.FETCH_USER,
        })).toEqual(
            {
                items: undefined,
                users: undefined
            }
        );
    });

    it('should handle FETCH_PARTIES_LOADING', () => {
        expect(reducer({}, {
            type: types.FETCH_PARTIES_LOADING,
        })).toEqual(
            {
                loading: true
            }
        );
    });

    it('should handle FETCH_PARTIES_FAILURE', () => {
        expect(reducer({}, {
            type: types.FETCH_PARTIES_FAILURE,
            error: ''
        })).toEqual(
            {loading: false}
        );
    });

    it('should handle FETCH_CANDIDATES_FAILURE', () => {
        expect(reducer({}, {
            type: types.FETCH_CANDIDATES_FAILURE,
            error: ''
        })).toEqual(
            {}
        );
    });

    it('should handle FETCH_OFFICES_FAILURE', () => {
        expect(reducer({}, {
            type: types.FETCH_OFFICES_FAILURE,
        })).toEqual(
            {}
        );
    });

    it('should handle FETCH_PARTY', () => {
        expect(reducer({}, {
            type: types.FETCH_PARTY,
        })).toEqual(
            {
                items: undefined
            }
        );
    });

    it('should handle FETCH_RESULT', () => {
        expect(reducer({}, {
            type: types.FETCH_RESULT,
        })).toEqual(
            {items: undefined}
        );
    });
});
