import { FETCH_POSTS, NEW_POST, NEW_PARTY, NEW_OFFICE } from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

export default function(state = initialState, action ) {
    switch(action.type) {
        case FETCH_POSTS:
        return {
            ...state,
            items: action.payload
        };
        case NEW_POST:
        return {
            ...state,
            item: action.payload
        };
        case NEW_PARTY:
        return {
            ...state,
            item: action.payload
        };
        case NEW_OFFICE:
        return {
            ...state,
            item: action.payload
        };
        default:
        return state;

    }
}
