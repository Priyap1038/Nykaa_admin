import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType";

export const login = (obj) => (dispatch) => {
  // dispatch(loginRequestAction())
  dispatch({ type: LOGIN_REQUEST });

  return axios
    .post("", obj)
    .then((res) => {
      console.log(res.data);
      //   dispatch(loginRequestSuccess(res.data))
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      //  dispatch(loginRquestFailure())
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const register = (obj) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post("", obj)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE });
    });
};
