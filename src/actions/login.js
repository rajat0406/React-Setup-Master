import commonApi from "utils/commonApi";
import { ACTION_TYPES } from "../constants";

export function login() {
  return async (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.LOGIN_REQUEST,
    });

    try {
      const response = await commonApi({ path: "/todos/1" });
      dispatch({
        type: ACTION_TYPES.LOGIN_COMPLETE,
        payload: response,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ACTION_TYPES.LOGIN_FAIL,
        payload: { error: "Some error occured" },
      });
    }
  };
}
