import {
    FETCH_USER,
    FETCH_PARTIES,
    FETCH_CANDIDATES,
    FETCH_CANDIDATES_FAILURE,
    FETCH_OFFICES,
    FETCH_PARTY,
    FETCH_RESULT,
    FETCH_PARTIES_FAILURE,
    FETCH_OFFICES_FAILURE,
    FETCH_PARTIES_LOADING,
    FETCH_INTERESTED_USERS_SUCCESS,
    FETCH_INTERESTED_USERS_FAILURE
} from '../actions/types';

const initialState = {
    parties: [],
    users: [],
    candidates: [],
    offices: [],
    interest: [],
    reducers: [],
    items: [],
    item: {},
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                items: action.payload,
                users: action.payload
            };
        case FETCH_PARTIES_LOADING:
            return {
                ...state,
                loading: true,
            };
        case FETCH_PARTIES:
            return {
                ...state,
                items: action.payload,
                parties: action.payload.data,
                loading: false,
            };
        case FETCH_PARTIES_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case FETCH_CANDIDATES:
            return {
                ...state,
                candidates: action.payload.data
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
                offices: action.payload.data
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
        case FETCH_INTERESTED_USERS_SUCCESS:
            return {
                ...state,
                interest: action.payload
            };
        case FETCH_INTERESTED_USERS_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;

    }
}
