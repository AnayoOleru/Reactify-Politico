import { FETCH_POSTS, NEW_POST, NEW_PARTY, NEW_OFFICE, NEW_VOTE, NEW_CANDIDATE } from '../actions/types';

const initialState = {
    items: [],
    item: {},
    success: false
};

export default function(state = initialState, action ) {
    // eslint-disable-next-line no-console
    console.log('4');
    switch(action.type) {
        case FETCH_POSTS:
        return {
            ...state,
            items: action.payload
        };
        case NEW_POST:
        return {
            ...state,
            item: action.payload,
            success: true
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
        case NEW_VOTE:
        return {
            ...state,
            item: action.payload
        };
        case NEW_CANDIDATE:
        return {
            ...state,
            item: action.payload
        };
        default:
        return state;

    }
}
