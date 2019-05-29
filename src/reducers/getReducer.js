import { FETCH_USER, FETCH_PARTIES, FETCH_CANDIDATES, FETCH_CANDIDATES_FAILURE, FETCH_OFFICES, FETCH_PARTY, FETCH_RESULT, FETCH_PARTIES_FAILURE, FETCH_OFFICES_FAILURE } from '../actions/types';

const initialState = {
    parties: [],
    users: [],
    offices: [],
    reducers: [],
    items: [],
    item: {}
};

export default function(state = initialState, action ) {
    switch(action.type) {
        case FETCH_USER:
        return {
            ...state,
            items: action.payload,
            users: action.payload
        };
        case FETCH_PARTIES:
        return {
            ...state,
            items: action.payload,
            parties: action.payload.data
        };
        case FETCH_PARTIES_FAILURE:
        return {
            ...state,
        };
        case FETCH_CANDIDATES:
        return {
            ...state,
            items: action.payload
        };
        case FETCH_CANDIDATES_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case FETCH_OFFICES:
        return {
            ...state,
            items: action.payload,
            offices: action.payload
        };
        case FETCH_OFFICES_FAILURE:
        return {
            ...state,
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
