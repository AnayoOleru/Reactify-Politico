import { FETCH_USER, FETCH_PARTIES } from '../actions/types';

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
        default:
        return state;

    }
}
