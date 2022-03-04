import * as constants from "./constants";
export const loginStart = () => {
  return {
    type: constants.LOGIN_START,
  };
};
export const loginSuccess = (user) => {
  return {
    type: constants.LOGIN_SUCCESS,
    payload: user,
  };
};
export const loginFailure = () => {
  return {
    type: constants.LOGIN_FAILURE,
  };
};
