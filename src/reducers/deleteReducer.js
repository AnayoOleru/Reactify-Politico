import { DROP_PARTY_FAILURE, DROP_PARTY_SUCCESS} from '../actions/types';

const initialState = {
    party: {}
};

export default function(state = initialState, action ) {
    switch(action.type) {
        case DROP_PARTY_SUCCESS:
        return {
            ...state,
            party: action.payload
        };
        case DROP_PARTY_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
        return state;

    }
}
