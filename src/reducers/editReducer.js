
import { EDIT_PARTY_FAILURE, EDIT_PARTY_SUCCESS } from '../actions/types';

const initialState = {
    patchArticle: {},
    success: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case EDIT_PARTY_SUCCESS:
            return {
                ...state,
                patchArticle: action.payload,
                success: true
            };
        case EDIT_PARTY_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;

    }
}
