import { FETCH_USER, FETCH_PARTIES, FETCH_CANDIDATES, FETCH_OFFICE, FETCH_PARTY, FETCH_RESULT } from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

export default function(state = initialState, action ) {
    switch(action.type) {
        case FETCH_USER:
        return {
            ...state,
            items: action.payload
        };
        case FETCH_PARTIES:
        return {
            ...state,
            items: action.payload
        };
        case FETCH_CANDIDATES:
        return {
            ...state,
            items: action.payload
        };
        case FETCH_OFFICE:
        return {
            ...state,
            items: action.payload
        };
        case FETCH_PARTY:
        return {
            ...state,
            items: action.payload
        };
        case FETCH_RESULT:
        return {
            ...state,
            items: action.payload
        };
        default:
        return state;

    }
}
