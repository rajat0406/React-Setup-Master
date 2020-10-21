import { ACTION_TYPES } from "../constants";

export function signUp() {
    return async (dispatch, getState) => {
        dispatch({
            type: ACTION_TYPES.SIGN_UP_REQUEST
        });

        try {
            setTimeout(() => {
                dispatch({
                    type: ACTION_TYPES.SIGN_UP_COMPLETE,
                    payload: { name: "harshit" }
                });
                console.log(getState().login)
            }, 1000)
        } catch (error) {
            dispatch({
                type: ACTION_TYPES.SIGN_UP_FAIL,
                payload: { error: "Some error occured" }
            });
        }
    };
}