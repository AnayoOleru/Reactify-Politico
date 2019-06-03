import expect from 'expect';
import reducer from '../../src/reducers/deleteReducer';
import * as types from '../../src/actions/types';

describe('Delete reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                party: {}
            }
        );
    });

    it('should handle DROP_PARTY_SUCCESS', () => {
        expect(reducer({}, {
            type: types.DROP_PARTY_SUCCESS,
        })).toEqual(
            {
                party: undefined,
            }
        );
    });

    it('should handle DROP_PARTY_FAILURE', () => {
        expect(reducer({}, {
            type: types.DROP_PARTY_FAILURE,
            error: ''
        })).toEqual(
            {}
        );
    });
});
