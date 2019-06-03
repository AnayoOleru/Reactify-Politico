import { FETCH_POSTS, NEW_POST, NEW_PARTY_SUCCESS, NEW_OFFICE_SUCCESS, NEW_VOTE_SUCCESS, NEW_VOTE_FAILURE, NEW_CANDIDATE_FAILURE, NEW_CANDIDATE_SUCCESS, NEW_OFFICE_FAILURE, NEW_PARTY_FAILURE, NEW_SIGNUP_SUCCESS, NEW_SIGNUP_FAILURE, NEW_SIGNUP_LOADING, NEW_SIGNIN_SUCCESS, NEW_SIGNIN_FAILURE, NEW_SIGNIN_LOADING } from '../actions/types';

const initialState = {
    items: [],
    item: {},
    success: false,
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
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
        case NEW_PARTY_SUCCESS:
            return {
                ...state,
                newParty: action.payload,
                loading: true
            };
        case NEW_PARTY_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case NEW_OFFICE_SUCCESS:
            return {
                ...state,
                newOffice: action.payload
            };
        case NEW_OFFICE_FAILURE:
            return {
                ...state,
            };
        case NEW_VOTE_SUCCESS:
            return {
                ...state,
                item: action.payload
            };
            case NEW_VOTE_FAILURE:
                return {
                    ...state,
                    error: action.payload
                };
        case NEW_CANDIDATE_SUCCESS:
            return {
                ...state,
                candidate: action.payload
            };
            case NEW_CANDIDATE_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                };
                case NEW_SIGNUP_LOADING:
                    return {
                        ...state,
                        loading: true,
                    };
        case NEW_SIGNUP_SUCCESS:
            return {
                ...state,
                signup: action.payload,
                success: true
            };
        case NEW_SIGNUP_FAILURE:
            return {
                ...state,
                error: action.payload
            };
            case NEW_SIGNIN_LOADING:
                return {
                    ...state,
                    loading: true,
                };
            case NEW_SIGNIN_SUCCESS:
                return {
                    ...state,
                    signin: action.payload,
                    success: true,
                    loading: false,
                };
            case NEW_SIGNIN_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                    loading: false,
                };
        default:
            return state;

    }
}
