import { ACTION_TYPES } from "../constants";

const INITIAL_STATE = {
    loader: false,
    data: {},
};

const signUp = function signUp(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTION_TYPES.SIGN_UP_REQUEST:
            return Object.assign({}, state, {
                loader: true
            })
        case ACTION_TYPES.SIGN_UP_COMPLETE:
            return Object.assign({}, state, {
                loader: false,
                data: action.payload
            })
        case ACTION_TYPES.SIGN_UP_FAIL:
            return INITIAL_STATE
        default:
            return state;
    }
}
export default signUp;