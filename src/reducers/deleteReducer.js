import { DROP_PARTY } from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

export default function(state = initialState, action ) {
    switch(action.type) {
        case DROP_PARTY:
        return {
            ...state,
            items: action.payload
        };
        default:
        return state;

    }
}
