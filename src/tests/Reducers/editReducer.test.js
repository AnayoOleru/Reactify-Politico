import expect from 'expect';
import reducer from '../../reducers/editReducer';
import * as types from '../../actions/types';

describe('Edit reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                patchArticle: {},
                success: false
            }
        );
    });

    it('should handle EDIT_PARTY_SUCCESS', () => {
        expect(reducer({}, {
            type: types.EDIT_PARTY_SUCCESS,
        })).toEqual(
            {
                patchArticle: undefined,
                success: true
            }
        );
    });

    it('should handle EDIT_PARTY_FAILURE', () => {
        expect(reducer({}, {
            type: types.EDIT_PARTY_FAILURE,
            error: ''
        })).toEqual(
            {}
        );
    });
});
